import React, { Component } from 'react';
import styles from '../Styles/Main'
import ComingSoon from './ComingSoon'
import {

  Text,
  ListView,
  Image,
  View,
  ActivityIndicator,

} from 'react-native';

class MovieDetail extends Component{
  constructor(props){
    super(props);
    console.log(this.props.movie.id);
    this.state={
      MovieDetail:'',
      loaded:false,
    };

     const REQUEST_URL =`https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
      console.log(REQUEST_URL);
    this.fetchData(REQUEST_URL);
  }
  fetchData(REQUEST_URL){
    console.log(REQUEST_URL);
      fetch(REQUEST_URL)
          .then(response => response.json())
          .then(responseData => {
              console.log(responseData);
              this.setState({
                  MovieDetail:responseData,
                  loaded:true,

              });
          })
          .done();
  };

  render(){

    if(!this.state.loaded==true){
      return(

      <View style ={styles.container}>
      <View style ={styles.center}>


       <ActivityIndicator
       size='small'
       color="#6435c9"/>

        </View>
      </View>
    );
}

   let movie = this.state.MovieDetail;
   let summary = movie.summary.split(/\n/).map(p =>{
     return(
       <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
       <Text style={styles.itemText}>{p}</Text>
       </View>
     );
   }) ;

    return(
      <View style ={[styles.container,{paddingTop:70}]}>
      <View style={[styles.item,{flexDirection:'column'}]}>
          {summary}
      </View>
      </View>





    );
  }
}
// <NavigatorIOS
// style={styles.container}
//
// <Text style={styles.container}>详情页</text>
// />
export {MovieDetail as default};
