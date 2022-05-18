import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import CardView from '../components/CardView';


const renderItem = ({ item }) => (
	<CardView 
		title={item.weekday} 
		temperature={item.max} 
		backgroundColor={"#006092"} 
		date={item.date} 
		icon={item.condition} 
	/>
	
);





function WeatherList(props) {
	return (
		<FlatList
			index={3}
			horizontal={true}
			style={{ marginTop: 50 }}
			contentContainerstyles={styles.list}
			data={props.dados}
			renderItem={renderItem}
			keyExtractor = {(_, index) => 'key'+index}
		/>
	);

}


const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
	},
	list: {
		paddingHorizontal: 20,
	},
	listItem: {
		backgroundColor: '#EEE',
		marginTop: 20,
		padding: 30,
	},
	loading:{
		padding:10
	},
	emptyListMessage:{
		marginHorizontal:50,
	},
	img:{
		width: 270, 
		height: 300,
		marginHorizontal: 5,
		marginVertical: 5,

	}
	
})


export default WeatherList;