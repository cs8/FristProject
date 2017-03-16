import React, { Component } from 'react';
import styles from '../Styles/Main'
import MoiveList from './MoiveList'
import {

  Text,
  ListView,
  Image,
  View,

  NavigatorIOS,
} from 'react-native';

class Featured extends Component{
  render(){
    return(
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title:'评分最高',
        component:MoiveList
      }}
      shadowHidden={true}
      barTintColor='darkslateblue'
      titleTextColor='rgba(255,255,255,0.8)'
      tintColor='rgba(255,255,255,0.8)'
      translucent={true}
      />
    );
  }
}

export {Featured as default};
