/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
//引用不同的React Native组件
import React, { 
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class ItemView extends React.Component {

	render()  {
        let {movie} = this.props? this.props : this.props.movie ;
		return (
			  <View style={styles.container}>
					<Image
					  source={{uri:movie.posters.thumbnail}}
					  style={styles.thumbnail}
					/>
					<View style={styles.rightContainer}>
					  <Text style={styles.title}>{movie.title}</Text>
					  <Text style={styles.year}>{movie.year}</Text>
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

});

