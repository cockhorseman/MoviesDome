//引用不同的React Native组件
import React, { 
  Component,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
} from 'react-native';


export default class LoadingView extends React.Component {

	render()  {
		return (
			<View style={styles.renderLoadingView}>
				<ProgressBarAndroid styleAttr='Inverse'/>
				
				<Text>
					 正在加载电影数据……
				</Text>
				
			</View>
		);
  }
  	
}


const styles = StyleSheet.create({
	renderLoadingView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});