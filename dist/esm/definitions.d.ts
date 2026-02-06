export interface SimCardInfo {
    number?: string;
    carrierName?: string;
    isoCountryCode?: string;
    mobileCountryCode?: string;
    mobileNetworkCode?: string;
}
export interface GetSimCards {
    simCards: SimCardInfo[];
}
