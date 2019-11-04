import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantInfo from './src/screens/RestaurantInfo';
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantInfo
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);
export default createAppContainer(navigator);
