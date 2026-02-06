import type { GetSimCards } from './definitions';
export interface SimCardPlugin {
    getSimCards(): Promise<GetSimCards>;
}
declare const SimCard: SimCardPlugin;
export * from './definitions';
export { SimCard };
