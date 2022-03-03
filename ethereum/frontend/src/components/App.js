import React, { Component } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/Connectors";

function App() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    
    async function connect () {
        try {
            await activate(injected);
        } catch (err) {
            console.log(err);
        }
    }

    async function disconnect() {
        try {
            deactivate();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='App'>
            <button onClick={connect}>Connect</button>
            {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
            <button onClick={disconnect}>Disconnect</button>
        </div>
        
    );
}

export default App;