import { registerPlugin } from '@capacitor/core';
import type { GetSimCards } from './definitions';

export interface SimCardPlugin {
  getSimCards(): Promise<GetSimCards>;
}

const SimCard = registerPlugin<SimCardPlugin>('SimCard');

export * from './definitions';
export { SimCard };