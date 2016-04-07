/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
//引用不同的React Native组件
import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  TouchableOpacity,

} from 'react-native';

import MovieDetails from '../details/MovieDetails'

//用于请求的json数据
/* var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'; */

let API_KEY = '7waqfqbprs7pajbz28mqf6vz';
let API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
let PAGE_SIZE = 25;
let PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
let REQUEST_URL = API_URL + PARAMS;



export default class MovieList extends React.Component {
	
	constructor(props){
		super(props);
		 this.state = {
			dataSource: new ListView.DataSource({
				//用于让ListView判断数据是否发生了变化
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			//用于判断数据加载是否已经完成了。
			loaded: false,
			isRefreshing: false,
		};
	}
			
	
	//React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不再会被调用
	componentDidMount() {
		//请求数据
		this.fetchData();
	}
	
	fetchData(){
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) =>{
					//setState实际上会触发一次重新渲染的流程，此时render函数被触发，发现this.state.movies不再是null
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
						loaded:true,
					});
			})
			.done();//可以抛出异常而不是简单忽略。	
	}

	
	//render函数用开渲染视图
	render() {
		//loaded为false时渲染一个“加载中”的视图
		if(!this.state.loaded){
			return this.renderLoadingView();
		}
		
		return (						
			<ListView
				
				/* navigator={this.props.navigator} */
				//接口用来在ListView的整个更新过程中判断哪些数据行发生了变化。
				dataSource={this.state.dataSource}
				//渲染一个item视图
				/* renderRow{this.renderMovie} */
				renderRow={this.renderMovie.bind(this)}
				style={styles.listView}
			/>			
		);
	}
	
	
	
	
	renderLoadingView(){
		return(
			<View style={styles.renderLoadingView}>
				<ProgressBarAndroid styleAttr='Inverse'/>
				
				<Text>
					 正在加载电影数据……
				</Text>
				
			</View>
		);
		
	}
	
	
	renderMovie(movie) {
    return (
	<View>
	<TouchableOpacity 
			style={styles.rightContainer} 
			onPress={() => {
				
				const { navigator } = this.props;
				if(navigator){
					navigator.push ({
					name: 'MovieDetails',
					component: MovieDetails,
				})
				}
				
            }}>	
				  <View style={styles.container}>
					<Image
					  source={{uri: movie.posters.thumbnail}}
					  style={styles.thumbnail}
					/>
					<View style={styles.rightContainer}>
					  <Text style={styles.title}>{movie.title}</Text>
					  <Text style={styles.year}>{movie.year}</Text>
					</View>
				  </View>
	  
	  </TouchableOpacity>
	  </View>
    );
  }
  
	
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row', //让主容器的成员从左到右横向布局
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		marginBottom: 8,
	},
	thumbnail: {
		width: 53,
		height: 81,
	},
	rightContainer:{
		flex: 1,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center',
	},
	listView: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},
	renderLoadingView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

