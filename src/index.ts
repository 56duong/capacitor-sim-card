import { registerPlugin } from '@capacitor/core';

import type { SimCardPlugin } from './definitions';

const SimCard = registerPlugin<SimCardPlugin>('SimCard', {
  web: () => import('./web').then((m) => new m.SimCardWeb()),
});

export * from './definitions';
export { SimCard };
