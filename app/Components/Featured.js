import React, { Component } from 'react';
import styles from '../Styles/Main'
import ComingSoon from './ComingSoon'
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
        title:'即将上映',
        component:ComingSoon
      }}
      // shadowHidden='true'
      barTintColor='darkslateblue'
      titleTextColor='rgba(255,255,255,0.8)'
      tintColor='rgba(255,255,255,0.8)'
      // translucent='true'
      />
    );
  }
}

export {Featured as default};
