import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealsList/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

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
function MealsOverviewScreen({ route, navigation }) {
    // navigation.navigate('MealsOverview', { categoryId: id });
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter((mealItem) =>
        mealItem.categoryIds.includes(catId),
    );

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId,
        ).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);
    return (
        <View style={styles.container}>
            <FlatList data={displayMeals} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
