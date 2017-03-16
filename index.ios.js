import React, { Component } from 'react';
import styles from './app/Styles/Main'
import MoiveList from './app/Components/MoiveList'
import ComingSoon from './app/Components/ComingSoon'
import Icons from './app/Assets/Icons'
import Featured from './app/Components/Featured'
import Featured0 from './app/Components/Featured0'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  View,
  TabBarIOS,
} from 'react-native';


class FristProject extends Component {

  constructor(props){

    super(props);
    this.state={
      selectedTab:'commingSoon'
    };
  }



    //dataSource 来源
    //模板 randerrow
    //systemIcon="featured"
    render() {

        return (
          <TabBarIOS barTintColor="darkslateblue" tintColor="white">
            <TabBarIOS.Item
            icon={{uri:Icons.homeOut,scale:4.6}}
            selectedIcon={{uri:Icons.home,scale:4.6}}
            title="马上上映"
            selected={this.state.selectedTab ==='commingSoon'}
            onPress={()=>{
              //设置值
              this.setState({
                selectedTab:'commingSoon'
              });

            }}
            >
            <Featured/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
            icon={{uri:Icons.starOut,scale:4.6}}
            selectedIcon={{uri:Icons.star,scale:4.6}}
            title="评分最高"
            selected={this.state.selectedTab ==='mostHigh'}
            onPress={()=>{
              //设置值
                this.setState({
              selectedTab:'mostHigh'
                });
            }}
            >
            <Featured0/>
            </TabBarIOS.Item>
          </TabBarIOS>



        );
    }
}
//    <ComingSoon/>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//
//   center:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   item:{
//     flexDirection:'row',
//     borderBottomWidth:1,
//     borderColor:'rgba(100,53,201,0.1)',
//     paddingBottom:6,
//     paddingTop:6,
//     flex:1,
//   },
//   itemText:{
//     fontSize:16,
//     fontFamily:'Helvetica Neue',
//     fontWeight:'400',
//     color:'rgba(0,0,0,0.8)',
//     lineHeight:26,
//   },
//   image:{
//     height:138,
//     width:99,
//     margin:6,
//   },
//   itemHeader:{
//     fontSize:18,
//     fontFamily:'Helvetica Neue',
//     fontWeight:'300',
//     color:'#6435c9',
//     marginBottom:6,
//   },
//   itemContent:{
//     flex:1,
//     marginLeft:13,
//     marginTop:6,
//   },
//   itemMeta:{
//     fontSize:16,
//     color:'rgba(0,0,0,0.6)',
//     marginBottom:6,
//   },
//   redText:{
//     color:'#db2828',
//     fontSize:15,
//   },
// });


AppRegistry.registerComponent('FristProject', () => FristProject);
