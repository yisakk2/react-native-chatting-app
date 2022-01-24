import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Chatting from '../screens/main/Chatting'
import Friend from '../screens/main/Friend'
import Setting from '../screens/main/Setting'
import Room from '../screens/main/Room'

import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont()

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Friend"
        component={Friend}
        options={{
          headerTitle: '친구',
          headerTitleAlign: 'left',
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'lightcoral',
        }}
      />
      <Tab.Screen
        name="Chatting"
        component={Chatting}
        options={{
          headerTitle: '채팅',
          headerTitleAlign: 'left',
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbubble-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'lightcoral',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '더보기',
          headerTitleAlign: 'left',
          tabBarIcon: ({color, size}) => (
            <Icon name="ellipsis-horizontal-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'lightcoral',
        }}
      />
    </Tab.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  )
}

export default AppNavigator