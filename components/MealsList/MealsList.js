import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
};
const MealsList = ({ items }) => {
    <View style={styles.container}>
        <FlatList data={items} renderItem={renderMealItem} />
    </View>;
};

export default MealsList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
