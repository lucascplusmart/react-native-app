import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home';
import SearchScreen from '../pages/search';
import { StatusBar } from 'expo-status-bar';
import Refresh from '../components/Refresh';
import Search from '../components/Search';
import CalendarScreen from '../pages/calendar';
import api from '../server/api';
import { useEffect, useState } from 'react';
import {View, Text,} from 'react-native';
import SendEmail from '../components/SendEmail';
import InfoScreen from '../pages/Info';
import Loading from '../components/Loading';
import GeoLocation from '../utils/geoLocation';

const iconsSize = 30
const Tab = createBottomTabNavigator();
var config = require('../config.json');

const NavigationPages = () => {
    const [isLoading, setLoading] = useState(true);
    const [currentTemperature, setCurrentTemperature] = useState({})
    const [text, setText] = useState('')

    const getRequest = async () => {
        let coords = await GeoLocation()
        api.get(`/weather?key=${config.key_01}&lat=${coords.latitude}&lon=${coords.longitude}&user_ip=remote`)
            .then((response) => {
                setCurrentTemperature(response.data.results)
            })
            .catch(function (error) {
                console.log("Error ao carregar dados", error);
            }).finally(() => setLoading(false));
    }

    useEffect(() => {
        getRequest()

    }, [])


    if (isLoading) {
        return (
            <Loading
                color={"#045256"}
                size={"large"}
            />
        )
    } 

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
                        } else if (route.name === 'Calendar') {
                            return (
                                <Ionicons
                                    name={focused ? 'calendar' : 'calendar-outline'}
                                    size={iconsSize}
                                    color={color}
                                />
                            )

                        }else if (route.name === 'Information') {
                            return (
                                <Ionicons
                                    name={focused ? 'information-circle' : 'information-circle-outline'}
                                    size={iconsSize}
                                    color={color}
                                />
                            )
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#045256',
                })}
            >
                {/* Screen Home Page*/}
                <Tab.Screen
                    name="Home"
                    children={() => <HomeScreen data={currentTemperature} />}
                    // options={{ tabBarBadge: 3 }}
                    size={100}
                    options={{
                        headerRight: () => (
                            <View style={{  flex: 1,
                                flexDirection: 'row'}}>
                                <Refresh size={25} color={"#045256"} getRequest={getRequest} />
                                <SendEmail size={25} color={"#045256"} data={currentTemperature}/>
                            </View>
                        ),
                    }}
                />

                {/* Screen serch Page*/}
                <Tab.Screen
                    name="Search"
                    children={() => <SearchScreen cityName={text} />}
                    options={{
                        headerRight: () => (
                            <Search size={25} color={"#045256"} setText={setText} text={text} />
                        )
                    }}
                />

                <Tab.Screen
                    name="Calendar"
                    component={CalendarScreen}
                />

                <Tab.Screen
                    name="Information"
                    component={InfoScreen}
                />

            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}


export default NavigationPages