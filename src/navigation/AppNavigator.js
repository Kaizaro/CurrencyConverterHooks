import React from 'react';
import {Image} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {APP_COLORS} from '../styleguide/Colors';
import DictionaryIcon from '../../assets/icons/tabBarIcons/DictionaryTabIcon.png';
import Init from '../Init';
import CurrencyList from '../screens/CurrencyList';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CurrencyListStack = createStackNavigator();
const CurrencyConverterStack = createStackNavigator();

const AppStackSwitcher = () => (
    <AppStack.Navigator initialRouteName={'Init'}>
        <AppStack.Screen
            name={'Init'}
            component={Init}
            options={{header: () => null}}
        />
        {/*<AppStack.Screen name={'AuthStack'} component={AuthStackSwitcher} />*/}
        <AppStack.Screen
            name={'MainStack'}
            component={MainStackSwitcher}
            options={{header: () => null}}
        />
    </AppStack.Navigator>
);

// const DictionaryStackSwitcher = () => (
//     <DictionaryStack.Navigator
//         initialRouteName={'Categories'}
//         headerMode={false}>
//         <DictionaryStack.Screen name={'Categories'} component={Categories} />
//         <DictionaryStack.Screen
//             name={'SubCategories'}
//             component={SubCategories}
//         />
//     </DictionaryStack.Navigator>
// );

const CurrencyListStackSwitcher = () => (
    <CurrencyListStack.Navigator
        initialRouteName={'CurrencyList'}
        headerMode={false}>
        <CurrencyListStack.Screen
            name={'CurrencyList'}
            component={CurrencyList}
        />
    </CurrencyListStack.Navigator>
);

// const CoursesStackSwitcher = () => (
//     <CoursesStack.Navigator initialRouteName={'Courses'} headerMode={false}>
//         <CoursesStack.Screen name={'Courses'} component={Courses} />
//     </CoursesStack.Navigator>
// );

const MainStackSwitcher = props => (
    <Tab.Navigator
        initialRouteName={'CurrencyListStackSwitcher'}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: APP_COLORS.BADGE_COLORS.SPACE_BLUE,
            inactiveTintColor: APP_COLORS.BLACK_COLOR,
        }}>
        <Tab.Screen
            name={'CurrencyListStackSwitcher'}
            component={CurrencyListStackSwitcher}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={DictionaryIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        {/*<Tab.Screen*/}
        {/*    name={'CoursesStackSwitcher'}*/}
        {/*    component={CoursesStackSwitcher}*/}
        {/*    options={{*/}
        {/*        tabBarIcon: state => (*/}
        {/*            <Image*/}
        {/*                source={CoursesIcon}*/}
        {/*                resizeMode={'contain'}*/}
        {/*                style={tabIconStyle(state.focused)}*/}
        {/*            />*/}
        {/*        ),*/}
        {/*    }}*/}
        {/*/>*/}
    </Tab.Navigator>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: APP_COLORS.BACKGROUND_COLOR,
    },
};

const tabIconStyle = active => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    tintColor: active
        ? APP_COLORS.BADGE_COLORS.SPACE_BLUE
        : APP_COLORS.BLACK_COLOR,
});

const AppNavigator = () => (
    <NavigationContainer theme={theme}>
        <AppStackSwitcher />
    </NavigationContainer>
);

export default AppNavigator;
