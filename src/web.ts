import { WebPlugin } from '@capacitor/core';

import type { SimCardInfo, SimCardPlugin } from './definitions';

export class SimCardWeb extends WebPlugin implements SimCardPlugin {
  getSimCards(): Promise<{ simCards: SimCardInfo[]; }> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
