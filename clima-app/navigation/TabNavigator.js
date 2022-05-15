import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home';
import SearchScreen from '../pages/search';
import { StatusBar } from 'expo-status-bar';
import Refresh from '../components/Refresh';
import Search from '../components/Search';
import api from '../server/api';
import { useEffect, useState } from 'react';

const iconsSize = 30
const Tab = createBottomTabNavigator();


const NavigationPages = () => {
    const [currentTemperature, setCurrentTemperature] = useState({})
    const [text, setText] = useState('')

    const getRequest = async () => {
        console.log("aqui")
        api.get("/weather?key=clc886d3&user_ip=remote")
            .then((response) => {
                // console.log("GET Response")
                // console.log(response.data);
                setCurrentTemperature(response.data.results)
            })
            .catch(function (error) {
                console.log("Error ao carregar dados",error);
            });

    }
    useEffect(() => {
        getRequest()

    }, [])


    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        if (route.name === 'Home') {
                            return (
                                <MaterialCommunityIcons
                                    name={
                                        focused
                                            ? 'home-circle'
                                            : 'home-circle-outline'
                                    }
                                    size={iconsSize}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Search') {
                            return (
                                <Ionicons
                                    name={focused ? 'search-circle' : 'search-circle-outline'}
                                    size={iconsSize}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#045256',
                })}
            >
                {/* Screen Home Page*/}
                <Tab.Screen
                    name="Home"
                    children={ () => <HomeScreen data={currentTemperature} />}
                    // options={{ tabBarBadge: 3 }}
                    size={100}
                    options={{
                        headerRight: () => (
                            <Refresh size={25} color={"#045256"} getRequest={getRequest}/>
                        ),
                    }}
                />

                {/* Screen serch Page*/}
                <Tab.Screen
                    name="Search"
                    children={ () => <SearchScreen cityName={text} />}
                    options={{
                        headerRight: () => (
                            <Search size={25} color={"#045256"} setText={setText} text={text}/>
                        )
                    }}
                />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

export default NavigationPages