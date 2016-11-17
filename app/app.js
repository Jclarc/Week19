/**
 * Created by Jake on 11/7/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require ('react-router').Router
var routes= require('./config/routes');

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)
