import type { SimCardInfo } from './definitions';
export interface SimCardPlugin {
    /**
     * Get information from device's sim cards.
     */
    getSimCards(): Promise<SimCardInfo[]>;
}
declare const SimCard: SimCardPlugin;
export * from './definitions';
export { SimCard };
