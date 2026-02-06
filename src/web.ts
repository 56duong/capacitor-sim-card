import { WebPlugin } from '@capacitor/core';

import type { SimCardInfo, SimCardPlugin } from './definitions';

export class SimCardWeb extends WebPlugin implements SimCardPlugin {
  getSimCards(): Promise<SimCardInfo[]> {
    throw new Error('Method not implemented.');
  }
}
