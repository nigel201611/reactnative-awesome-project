import Navigator from './navigator';
import { rootContext } from '@utils/index';
import rootStore from '@models/index';

function App(): JSX.Element {
  return (
    <rootContext.Provider value={rootStore}>
      <Navigator></Navigator>
    </rootContext.Provider>
  );
}

export default App;
