import * as React from 'react'
import {Text, View} from 'react-native'

import AdminScreen from './AdminScreen'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="AdminScreen" 
        options={{tabBarIcon: () => <text>👱</text>}}
        component={AdminScreen} />
      
    </Tab.Navigator>
  )
}
export default HomeScreen