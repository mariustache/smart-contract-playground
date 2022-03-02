import React, { Component } from "react";

class App extends Component {
    state = { walletInfo: { address: '', balance: 0 } };
    
    async connectWallet() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const chainId = await window.ethereum.request({ method: 'eth_chainId'});
            this.state.walletInfo.address = accounts[0];
            this.state.walletInfo.chainId = chainId;
        } else {
            // Show alert if Ethereum provider is not detected
            alert("Please install Mask");
        }
    }

    render() {
        return (
            <div className='App'>
                <h1>Test</h1>
                <button onClick={this.connectWallet}>Connect</button>
            </div>
            
        );
    }
}

export default App;