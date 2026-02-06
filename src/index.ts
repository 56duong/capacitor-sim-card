import { registerPlugin } from '@capacitor/core';
import type { SimCardInfo } from './definitions';

export interface SimCardPlugin {
  /**
   * Get information from device's sim cards.
   */
  getSimCards(): Promise<{ simCards: SimCardInfo[] }>;
}

const SimCard = registerPlugin<SimCardPlugin>('SimCard');

export * from './definitions';
export { SimCard };