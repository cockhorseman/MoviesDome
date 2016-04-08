import React,{
    View,
    Text,
    Image,
    TouchableOpacity,
	BackAndroid,
	StyleSheet,
} from 'react-native';

import MovieList from '../pages/MovieList';
import ItemView from '../view/ItemView'

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        
        this.backEvent = this._backEvent.bind(this);
    }
	
	//React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不再会被调用
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress',this.backEvent);
	}
	//用于处理移除组件的操作
	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress',this.backEvent);
	}
	
	 _backEvent () {
		const {navigator} = this.props;
		const routers = navigator.getCurrentRoutes();
		if (routers.length > 1) {
		  navigator.pop();
		  return true;
		}
		return false;
	  };
	
    render() {
        let {mv} = this.props;
         console.log(mv);
        return (
 			 <ItemView 
				style={styles.rightContainer}				
				movie={mv}  //传递数据
			/>
        );
    }
}

const styles = StyleSheet.create({

	rightContainer:{
		flex: 1,
	},

});