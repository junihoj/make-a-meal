import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

export default function FavoritesScreen() {
    const favoriteContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal) =>
        favoriteContext.ids.includes(meal.id),
    );

    if (favoriteMeals.length == 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
