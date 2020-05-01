import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,Text,} from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import { createStackNavigator} from 'react-navigation-stack';
import  HomeScreen  from './src/screens/HomeScreen';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import { Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
{
  Home: HomeScreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,

},
{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'My blog'
  }
}
);

const App =  createAppContainer(navigator);

export default () => {
  return <Provider>
    <App/>
    </Provider>
};
 