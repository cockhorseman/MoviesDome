/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
//引用不同的React Native组件
import React, {
  AppRegistry,
  Component, 
  Navigator,
} from 'react-native';

import MovieList from './src/pages/MovieList';



export default class MoviesDome extends Component {
	
	constructor(props){
		super(props);
		
	}

	
	//render函数用开渲染视图
	render() {
		//一个初始首页的component名字
        let defaultName = 'MovieList';
		//这个组件的Class,用来一会儿实例化成 <Component />标签
        let defaultComponent = MovieList;
		 return (
			<Navigator
				// 这个指定了默认的页面，也就是启动app之后会看到界面的第一屏。 
				//需要填写两个参数: name 跟 component。
			  initialRoute={{ name: defaultName, component: defaultComponent }}
			  //这个是页面之间跳转时候的动画
			  configureScene={(route) => {
				return Navigator.SceneConfigs.VerticalDownSwipeJump;
			  }}
			   
			  renderScene={(route, navigator) => {
				let Component = route.component;
				//这里有一个判断，也就是如果传递进来的component存在，那我们就是返回一个这个component
				// route={component: xxx, name: xxx, ...}， navigator.......route 用来在对应界面获取其他键值
				//{...route.params}即就是把params里的键值对全部以给属性赋值的方式展开
				return <Component {...route.params} navigator={navigator} />
			  }} />
        );
	}
	

}


AppRegistry.registerComponent('MoviesDome', () => MoviesDome);