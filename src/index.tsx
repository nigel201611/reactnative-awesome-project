import { Provider as MobxProvider } from 'mobx-react';
import { Component } from 'react';
import Navigator from './navigator';
import rootStore from '@models/index';

// function App(): JSX.Element {
//   return (
//     <MobxProvider {...rootStore}>
//       <Navigator></Navigator>
//     </MobxProvider>
//   );
// }

class App extends Component {
  render() {
    return (
      <MobxProvider {...rootStore}>
        <Navigator></Navigator>
      </MobxProvider>
    );
  }
}

export default App;
