import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import Aside from './components/Aside';
import {
  Contact,
  Explore,
  MyCollection,
  Authors,
  CreateItem,
  Home,
  SignIn,
  ConnectWallet,
  Auction,
  ItemDetails,
  SignUp,
} from './pages';

import './assets/css/style.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from './connector';

const App = () => {
  const { account, activate } = useWeb3React();

  useEffect(() => {
    const isMetamask = window.localStorage.getItem('wallet') === 'metamask';
    if (!account && isMetamask) {
      activate(injectedConnector);
    }
  }, [account, activate]);

  useEffect(() => {
    window.document.body.classList.add('g-sidenav-show');
    window.document.body.style.backgroundColor = '#f8f9fa !important';
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>NFT Marketplace</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
      </Helmet>

      <Aside />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/explore" component={Explore} />
        <Route path="/mycollection" component={MyCollection} />
        <Route path="/authors" component={Authors} />
        <Route path="/createitem" component={CreateItem} />
        <Route path="/signin" component={SignIn} />
        <Route path="/connectwallet" component={ConnectWallet} />
        <Route path="/auction" component={Auction} />
        <Route path="/itemdetails/:id" component={ItemDetails} />
        <Route path="/itemdetails" component={ItemDetails} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
