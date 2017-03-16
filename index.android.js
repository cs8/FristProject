/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from './app/Styles/Main'
import MoiveList from './app/Components/MoiveList'
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';
const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
export default class FristProject extends Component {



  render() {

      return (
      <MoiveList/>
      );
  }
}



AppRegistry.registerComponent('FristProject', () => FristProject);
