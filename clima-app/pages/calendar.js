import { StyleSheet, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { WindowWidth, WindowHeight  } from '../utils/dimesion';

const ClendarScreen = () => {

    return (
        <View style={styles.container}  >
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                calendarWidth={WindowWidth}
                calendarHeight={WindowHeight}
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