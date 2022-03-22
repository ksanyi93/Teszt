import petownersore from './petownerstore';
import Petlist from './Petlist';

function App() {
  const store = new petownersore();
  return <Petlist store={store} />
}

export default App;
