import { FlatList, SafeAreaView } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
function renderCategoryItem(itemData) {
    const pressHandler = () => {};
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    );
}

function CategoriesScreen({ navigation }) {
    const pressHandler = (id) => {
        navigation.navigate('MealsOverview', { categoryId: id });
    };
    return (
        <SafeAreaView>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <CategoryGridTile
                        title={itemData.item.title}
                        color={itemData.item.color}
                        onPress={() => pressHandler(itemData.item.id)}
                    />
                )}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default CategoriesScreen;
