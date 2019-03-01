import React, { Component } from 'react';
import { Router, Switch, Route, IndexRoute } from 'react-router-dom';

//import Header_Logo from'../assets/static/images/faq_header.jpg';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";


import Loader from '../components/layouts/loader';
import Versions from '../components/layouts/attribute/versions';

//import My_account from '../containers/faq/my_account';

import Survey from '../containers/Survey';


export default () => {

  let Device_class = "body"

  if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)){
    Device_class = "body-mobile"
  }

  console.log(Device_class);

  return (
    <div className="bg-red">
      <Loader />
      <Versions />
      <section>
        <div className={Device_class}>
          <Switch>
            <Route exact path="/" component={Survey} />
          </Switch>
        </div>
      </section>
      <footer>
        © 2018 YourNextU
      </footer>
    </div>
  )
}
