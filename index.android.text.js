/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];



class MoviesDome extends Component {
	
	
	render() {
		var movie=MOCKED_MOVIES_DATA[0];  //不能放在MoviesDome中直接赋值
		return ( 
			<View style = {styles.container}>
				<Image 
					source={{uri:movie.posters.thumbnail}}
					style={styles.thumbnail}
				/>
				<View style = {styles.rightContainer}>
					<Text style = {styles.title}> {movie.title}</Text>
					<Text style = {styles.year}> {movie.year}</Text>
				</View>
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
	}
});



AppRegistry.registerComponent('MoviesDome', () => MoviesDome);