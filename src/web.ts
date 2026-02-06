import { WebPlugin } from '@capacitor/core';

import type { SimCardPlugin } from './definitions';

export class SimCardWeb extends WebPlugin implements SimCardPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
