import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
import Site_Logo from'../../assets/register_template/image/SEAC logo.png';
//import ClientPage from './client'

const Text_Input_Page = ({
  handleSubmit, onInputChange, category, severity_level
}) => (
    <label className="input">
        <i className="icon-prepend icon-user"></i>
          <input name="first_name" placeholder="First name" type="text" value="" />
    </label>
)

export default Text_Input_Page;
