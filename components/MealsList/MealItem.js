import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import cardShadows from '../../styles/shadows/cardShadows';
import { useNavigation } from '@react-navigation/native';

function MealItem({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) {
    const navigation = useNavigation();
    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    };
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={selectMealItemHandler}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}</Text>
                    <Text style={styles.detailItem}>
                        {complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.detailItem}>
                        {affordability.toUpperCase()}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        ...cardShadows,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {},
});
export default MealItem;
