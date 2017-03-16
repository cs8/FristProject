/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,

} from 'react-native';
const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
export default class FristProject extends Component {

  constructor(props){
    super(props);



    // let movies =[
    //   {title:'小小小'},
    //   {title:'非诚勿扰'},
    //   {title:'甲方乙方'},
    //   {title:'霸王别机'},
    //   {title:'美丽人生'},
    // ];
    //对比数据的方法
    // let dataSource = new ListView.DataSource({
    //   rowHasChanged: (row1,row2) => row1!== row2
    //
    // });
    //设置组件初始化的状态
    // this.state={
    //   movies:dataSource.cloneWithRows(movies)
    // };
     this.state ={
       movies:new ListView.DataSource({
         rowHasChanged: (row1,row2) => row1!== row2

       })
     }
       this.fetchData();
     };

  }

  fetchData(){
    fetch(REQUEST_URL)
      .then(response=> respone.json())
      .then(responeData =>{
        console.log(responseData);
        this.setState({
                    movies:this.state.movies.cloneWithRows(responseData.subjects)

      })
  }

  renderMovieList(movie){

    return(
      <View style={styles.item}>
      <View style={styles.itemImage}>
      <Image
        source={{uri:movie.images.large}}
        style= {styles.Image}
      />
      </View>
      <View style={styles.itemContent}>
       <Text
         style={styles.item}

       >{movie.title}</Text>
       <Text
         style={styles.item}

       >{movie.original_title}(movie.year)</Text>
      </View>
      </View>



    );

  }



  render() {
    return (
      <View style={styles.easycontainer}>

      <ListView style={styles.easycontainer}
        dataSource={this.state.movies}
        // renderRow={
        //   movies=><Text style ={styles.itemOne}> {movies.title} </Text>
        // }
        renderRow={this.renderMovieList}
      />


      </View>
      // <Text style ={[styles.item,{fontFamily:'Helvetica Neue'}]}>www.<Text style= {{fontWeight:'700'}}>baidu</Text>.com</Text>
      //
      // <HeaderText>2121212</HeaderText>
      //
      // <Image style ={styles.imagebackground} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489146688337&di=3ec7d3e7f8be58074051ed9e47285aed&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F22%2F222050cul0mv5tnm9vn0im.png'}}>
      //
      //
      // </Image>
      // <Image style ={styles.image} source={{uri:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png'}}/>

      // <View style ={[styles.item,styles.itemOne]}>
      // <Text style ={styles.text}> 1 </Text>
      // </View>
      //
      // <View style ={[styles.item,styles.itemTwo]}>
      // <Text style ={styles.text}> 2 </Text>
      // </View>
      //
      // <View style ={[styles.item,styles.itemThree]}>
      // <Text style ={styles.text}> 3 </Text>
      // </View>


      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //   chensi is here
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

class HeaderText extends React.Component{

 render(){
   return (
     <Text style ={styles.itemOne}>{this.props.children}</Text>
   );

 }


}
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  imagebackground:{
    flex:1,
    resizeMode:'cover',
    // width:width,
    // height:height,

  },
  image:{
    width:99,
    height:30,


  },

  itemOne:{
    alignSelf:'flex-start',
    fontSize:43,
    fontWeight:"100",
    color: '#333333',


  },
  itemTwo:{
    alignSelf:'center',


  },
  itemThree:{
    alignSelf:'flex-end',
    // flex:2,


  },
  item:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#6535c9',
    margin:16,



},

   back:{
      flex: 1,
      backgroundColor: '#eae7ff',
      marginTop:30,
      //内容居中还是靠向哪
      // justifyContent:'center',
      // justifyContent:'flex-end',
      justifyContent:'flex-start',
      // justifyContent:'space-around',
      // alignItems:'flex-start'

      //方向 默认是cloum
      flexDirection:'row',

   },
   text:{
     fontSize:33,
     fontWeight:"100",

  },
  easycontainer:{
      flex: 1,
      marginTop:10,

  },


  container: {
    //占满全屏
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae7ff',

    paddingTop:30,

    margin:30,
    borderWidth:1,
    borderColor:'#713384',
    borderRadius:16,
    //阴影透明度
    shadowOpacity:0.6,
    shadowColor:'#cecece',
    shadowRadius:2,
    //阴影偏移
    shadowOffset:{
      height:4,
      width:0,
    },
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    //意大利字体
    // fontStyle:'italic',
    // //字间距
    // letterSpacing:2,
    // //行间距
    // lineHeight:22,
    fontFamily:'Helvetica Neue',
    fontWeight:'100',
    //上划线 下划线
    textDecorationLine:'underline',
    textDecorationStyle:'double',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FristProject', () => FristProject);
