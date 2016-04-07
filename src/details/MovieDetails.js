import React,{
    View,
    Text,
    TouchableOpacity,
	BackAndroid,
	StyleSheet,
} from 'react-native';

import MovieList from '../pages/MovieList';

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.backEvent = this._backEvent.bind(this);
    }
	
	//React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不再会被调用
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress',this.backEvent);
	}
	//用于完成在组件从DOM中卸载之前的操作
	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress',this.backEvent);
	}
	
	 _backEvent = () => {
		const nav = this.props.navigator;
		const routers = nav.getCurrentRoutes();
		if (routers.length > 1) {
		  nav.pop();
		  return true;
		}
		return false;
	  };
	
    render() {
        return (
            <View style={styles.container}>
              
                    <Text style={styles.text}>Click back to return to the video list</Text>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	text: {
		fontSize: 20,
	},

});