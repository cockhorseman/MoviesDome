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
	
	//React�����һ���������ڷ���������������ռ�����ɵ�ʱ�����һ�Σ��Ժ��ٻᱻ����
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress',this.backEvent);
	}
	//��������������DOM��ж��֮ǰ�Ĳ���
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