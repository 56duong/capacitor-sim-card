package com._56duong.capacitorsimcard;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Build;
import android.telephony.SubscriptionInfo;
import android.telephony.SubscriptionManager;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

import java.util.List;

@CapacitorPlugin(
    name = "SimCard",
    permissions = {
        @Permission(
            strings = { Manifest.permission.READ_PHONE_STATE },
            alias = SimCardPlugin.READ_PHONE_STATE
        ),
        @Permission(
            strings = { Manifest.permission.READ_PHONE_NUMBERS },
            alias = SimCardPlugin.READ_PHONE_NUMBERS
        )
    }
)
public class SimCardPlugin extends Plugin {
    public static final String READ_PHONE_STATE = "readPhoneState";
    public static final String READ_PHONE_NUMBERS = "readPhoneNumbers";
    private static final String PERMISSION_DENIED_ERROR = "Unable to get information from sim cards, user denied permission request";

    @PluginMethod
    public void getSimCards(PluginCall call) {
        if (!isPermissionGranted()) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                requestPermissionForAliases(new String[]{READ_PHONE_NUMBERS, READ_PHONE_STATE}, call, "permissionCallback");
            } else {
                requestPermissionForAlias(READ_PHONE_STATE, call, "permissionCallback");
            }
            return;
        }

        SubscriptionManager subscriptionManager = (SubscriptionManager) getContext().getSystemService(Context.TELEPHONY_SUBSCRIPTION_SERVICE);

        @SuppressLint("MissingPermission")
        List<SubscriptionInfo> subscriptionInfoList = subscriptionManager.getActiveSubscriptionInfoList();

        JSArray carrierInfoCollection = new JSArray();
        if (subscriptionInfoList != null) {
            for (SubscriptionInfo subscriptionInfo : subscriptionInfoList) {
                JSObject carrierInfo = new JSObject();

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    // getPhoneNumber requires API 33+
                    try {
                        String number = (String) SubscriptionManager.class
                                .getMethod("getPhoneNumber", int.class)
                                .invoke(subscriptionManager, subscriptionInfo.getSubscriptionId());
                        carrierInfo.put("number", number);
                    } catch (Exception e) {
                        carrierInfo.put("number", "");
                    }
                } else {
                    carrierInfo.put("number", subscriptionInfo.getNumber());
                }

                carrierInfo.put("carrierName", subscriptionInfo.getCarrierName());
                carrierInfo.put("isoCountryCode", subscriptionInfo.getCountryIso());

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    carrierInfo.put("mobileCountryCode", subscriptionInfo.getMccString());
                    carrierInfo.put("mobileNetworkCode", subscriptionInfo.getMncString());
                } else {
                    carrierInfo.put("mobileCountryCode", String.valueOf(subscriptionInfo.getMcc()));
                    carrierInfo.put("mobileNetworkCode", String.valueOf(subscriptionInfo.getMnc()));
                }

                carrierInfoCollection.put(carrierInfo);
            }
        }

        call.resolve(carrierInfoCollection);
    }

    @PermissionCallback
    private void permissionCallback(PluginCall call) {
        if (!isPermissionGranted()) {
            Logger.debug(getLogTag(), "User denied read phone state permission");
            call.reject(PERMISSION_DENIED_ERROR);
            return;
        }

        if ("getSimCards".equals(call.getMethodName())) {
            getSimCards(call);
        }
    }

    private boolean isPermissionGranted() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            return getPermissionState(READ_PHONE_NUMBERS) == PermissionState.GRANTED &&
                   getPermissionState(READ_PHONE_STATE) == PermissionState.GRANTED;
        }
        return getPermissionState(READ_PHONE_STATE) == PermissionState.GRANTED;
    }
}