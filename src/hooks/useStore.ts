import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

import rootStore from '@models/index';
// 根据RootStore来实现参数的自动获取和返回值的自动推导
function useStore<T extends typeof rootStore, V extends keyof T>(
  name: V,
): T[V] {
  const store = useContext(MobXProviderContext) as T;
  return store[name];
}
export default useStore;
