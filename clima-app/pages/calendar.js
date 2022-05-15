import { StyleSheet,useWindowDimensions, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height



const ClendarScreen = () => {

    return (
        <View style={styles.container}  >
            <CalendarList
                // Enable horizontal scrolling, default = false
                horizontal={true}
                // Enable paging on horizontal, default = false
                pagingEnabled={true}
                // Set custom calendarWidth.
                calendarWidth={windowWidth}
                calendarHeight={windowHeight}
               

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ClendarScreen