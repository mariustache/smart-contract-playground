import React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3/dist/web3.min";
import { Web3ReactProvider } from "@web3-react/core";

import App from "./components/App";

function getLibrary(provider) {
    return new Web3(provider);
}

ReactDOM.render(
    <Web3ReactProvider getLibrary={getLibrary}>
        <App />
    </Web3ReactProvider>,
    document.querySelector("#root")
);