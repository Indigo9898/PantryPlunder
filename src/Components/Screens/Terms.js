import IngredientBox from './Parts/IngredientBox';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import React, { useState, useEffect } from "react";
import ingredient from '../../Scripts/assets/ingredient';
import Navigation from '../Screens/Navigation';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';

  let Terms = () => {
    return(
      <div class="centered-container">
        <p>Terms And Conditions</p>
        <p>We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.

        What User Data We Collect
        Your IP address.
        Your contact information and email address.
        Data profile regarding your online behavior on our website.

        Why We Collect Your Data
        To better understand your needs.
        To improve our services and products.
        To customize our website according to your online behavior and personal preferences.

        Safeguarding and Securing the Data
        Pantry Plunder is committed to securing your data and keeping it confidential. Pantry Plunder has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.</p>
        <Link to="/signup">Return To Sign Up</Link>
      </div>
    )
  }


  export default Terms;