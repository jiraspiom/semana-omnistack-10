import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
                headerTitleAlign: 'center'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no GitHub',
                headerTitleAlign: 'center'
            },
        }
    }, {
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerStyle:{
                backgroundColor: '#7D47E0',
            },
        },
    })
);

export default Routes;


