import React, { Component } from 'react';
import styles from '../Styles/Main'
import MovieDetail from './MovieDetail'
import {

  Text,
  ListView,
  Image,
  View,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/coming_soon';

class ComingSoon extends Component {
    constructor(){
        super();




        this.state = {
            movies:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            loaded:false
        }
        this.fetchData();
    };

    showMoiveDetail(movie){
      this.props.navigator.push({
        title:movie.title,
        component:MovieDetail,
        passProps:{movie},
      });
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    movies:this.state.movies.cloneWithRows(responseData.subjects),
                    loaded:true
                })
            })
            .done();
    };

    renderMovieList(movie){
      return(
        <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
         onPress={()=>{
           console.log(`${movie.title}被点了`);
            this.showMoiveDetail(movie);
         }}
        >
          <View style={styles.item}>
            <View style={styles.itemImage}>
              <Image
                style={styles.image}
                source={{uri:movie.images.large}} />
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemHeader}>
                {movie.title}
              </Text>
              <Text style={styles.itemMeta}>
                {movie.original_title} ({movie.year})
              </Text>
              <Text style={styles.redText}>
                {movie.rating.average}
              </Text>
            </View>
          </View>
          </TouchableHighlight>
      );
    }
    //dataSource 来源
    //模板 randerrow
    render() {
      if(!this.state.loaded==true){
        return (
         <View style ={styles.containertop}>
         <View style ={styles.center}>


          <ActivityIndicator
          size='small'/>

           </View>
         </View>


        );
      }
        return (
          <View style={styles.containertop}>


            <ListView style={styles.margintop}
                dataSource={this.state.movies}
                renderRow={
                    this.renderMovieList.bind(this)}
                />
          </View>
        );
    }
}
//  <ActivityIndicatorIOS
 // size='small'/>
 // <Text >加载中...</Text><Text >加载中...</Text>
export {ComingSoon as default};
