import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { RecoilRoot } from 'recoil';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from './library';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MoralisProvider
          appId="KwxImBKhTRNB448sMw6mMGVteVIODdGtPFymhpuP"
          serverUrl="https://g2lnm7aelomg.usemoralis.com:2053/server"
        >
          <App />
        </MoralisProvider>
      </Web3ReactProvider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
