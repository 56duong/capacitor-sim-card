import { registerPlugin } from '@capacitor/core';
import type { SimCardPlugin, SimCardInfo } from './definitions';

const _SimCard = registerPlugin<SimCardPlugin>('SimCard');

export const SimCard = {
  /**
   * Get information from device's sim cards.
   */
  async getSimCards(): Promise<SimCardInfo[]> {
    const result = await _SimCard.getSimCards();
    // If result.simCards exists, return it; else assume it's already an array
    return Array.isArray(result) ? result : result.simCards;
  }
};