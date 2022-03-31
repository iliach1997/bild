


import { AuthProvider } from './providers/authProvider';

import { Cartprovider } from './providers/cartProvider';

import { Routes } from './Routes'

import './App.css';

function App() {
  return (

<AuthProvider>
<Cartprovider>


<Routes/>



</Cartprovider></AuthProvider>

  );
}

export default App;
