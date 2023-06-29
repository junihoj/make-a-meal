import { StyleSheet, Text, View } from 'react-native';

const List = ({ data }) => {
    return (
        <>
            {data.map((dataPoint) => (
                <View style={styles.ListItem} key={dataPoint}>
                    <Text style={styles}>{dataPoint}</Text>
                </View>
            ))}
        </>
    );
};

export default List;

const styles = StyleSheet.create({
    ListItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    },
});
