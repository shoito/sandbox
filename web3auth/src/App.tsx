import detectEthereumProvider from '@metamask/detect-provider';
import React from 'react';
import Web3 from 'web3';

import './App.css';

function App() {

  const [address, setAddress] = React.useState("");

  var web3: Web3;

  const connect = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });
    if (provider && window.ethereum?.isMetaMask) {
      console.log('isMetaMask.');

      web3 = new Web3(Web3.givenProvider);
      web3.eth.defaultChain = "ropsten"; // kovan, rinkeby, gorli, ...

      const accounts = await web3.eth.requestAccounts();
      setAddress(accounts[0]);
    } else {
      console.log('MetaMask not found.')
    }
  }

  // TODO make connect button
  connect();

  return (
    <div className="App">
      {address}
    </div>
  );
}

export default App;
