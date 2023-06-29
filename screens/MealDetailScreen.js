import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route, navigation }) => {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id == mealId);
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={changeFavoriteStatusHandler}
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white"
                    />
                );
            },
        });
    }, [navigation]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.imageStyle}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    container: {
        backgroundColor: 'blue',
    },
    imageStyle: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
});

export default MealDetailScreen;
