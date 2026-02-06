export interface SimCardInfo {
    /**
     * Android only: Phone number.
     */
    number?: string;
    /**
     * iOS only: If this carrier allows VOIP calls to be made on its network.
     */
    allowsVOIP?: boolean;
    /**
     * The name of the cellular service provider.
     */
    carrierName: string;
    /**
     * Country code for the cellular service provider,
     * represented as an ISO 3166-1 country code string.
     */
    isoCountryCode: string;
    /**
     * Mobile country code (MCC) for the cellular service provider,
     * in its numeric representation.
     */
    mobileCountryCode: string;
    /**
     * Mobile network code (MNC) for the cellular service provider,
     * in its numeric representation.
     */
    mobileNetworkCode: string;
}
export interface SimCardPlugin {
    getSimCards(): Promise<{
        simCards: SimCardInfo[];
    }>;
}
