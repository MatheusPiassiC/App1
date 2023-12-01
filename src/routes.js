import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Home } from './pages/home';
import { Passwords } from './pages/passwords';
import { Login } from './pages/login';
import { Welcome } from './pages/welcome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//define as rotas do app
const HomeTabs = () => {
	//rotas do tipo tab
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="home"
				component={Home}
				options={{
					tabBarShowLabel: true,
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => {
						return focused ? (
							<Ionicons size={size} color={color} name="home" />
						) : (
							<Ionicons size={size} color={color} name="home-outline" />
						);
					},
				}}
			/>

			<Tab.Screen
				name="passwords"
				component={Passwords}
				options={{
					tabBarShowLabel: true,
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => {
						return focused ? (
							<Ionicons size={size} color={color} name="lock-closed" />
						) : (
							<Ionicons size={size} color={color} name="lock-closed-outline" />
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export function Routes() {
	//rotas do tipo stack
	//"hometabs" chama as rotas do tipo tab
	return (
		<Stack.Navigator>


			<Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="hometabs"
				component={HomeTabs}
				options={{ headerShown: false }}
			/>

		</Stack.Navigator>
	);
}
