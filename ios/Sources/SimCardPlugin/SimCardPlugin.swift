import Foundation
import Capacitor
import CoreTelephony

@objc(SimCardPlugin)
public class SimCardPlugin: CAPPlugin {
    @objc func getSimCards(_ call: CAPPluginCall) {
        if let carrierCollection = CTTelephonyNetworkInfo().serviceSubscriberCellularProviders {
            var carrierInfoCollection: [[String: Any]] = []
            for (_, carrier) in carrierCollection {
                carrierInfoCollection.append([
                    "allowsVOIP": carrier.allowsVOIP,
                    "carrierName": carrier.carrierName ?? "",
                    "isoCountryCode": carrier.isoCountryCode ?? "",
                    "mobileCountryCode": carrier.mobileCountryCode ?? "",
                    "mobileNetworkCode": carrier.mobileNetworkCode ?? ""
                ])
            }
            call.resolve(carrierInfoCollection)
        } else {
            call.resolve([])
        }
    }

    @objc override public func checkPermissions(_ call: CAPPluginCall) {
        call.resolve([
            "readSimCard": "granted"
        ])
    }

    @objc override public func requestPermissions(_ call: CAPPluginCall) {
        call.resolve([
            "readSimCard": "granted"
        ])
    }
}
