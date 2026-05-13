import { registerPlugin } from '@capacitor/core';
import type { SimCardInfo } from './definitions';

export interface SimCardPlugin {
  /**
   * Get information from device's sim cards.
   * @returns An array of sim card information objects.
   * @example
   * async function getSimCards() {
   *  try {
   *    const { simCards } = await SimCard.getSimCards();
   *    console.log(simCards); // [{ number: '+84965661111', carrierName: 'Viettel', isoCountryCode: '452', mobileNetworkCode: '04 }, { number: '+84965669999', carrierName: 'Viettel', isoCountryCode: '452', mobileNetworkCode: '04 }]
   *  } catch (error) {
   *    console.error('Error getting sim cards:', error);
   *  }
   */
  getSimCards(): Promise<{ simCards: SimCardInfo[] }>;
}

const SimCard = registerPlugin<SimCardPlugin>('SimCard');

export * from './definitions';
export { SimCard };