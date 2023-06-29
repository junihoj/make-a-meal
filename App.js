import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
// import 'react-native-gesture-handler';
// Run yarn add react-native-reanimated@next react-native-gesture-handler

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
                drawerContentStyle: { backgroundColor: '#351401' },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="favorite"
                component={FavoritesScreen}
                options={{
                    title: 'Favorites',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};
export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: '#351401' },
                            headerTintColor: 'white',
                            contentStyle: { backgroundColor: '#3f2f25' },
                        }}
                    >
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                title: 'All Category',
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealDetail"
                            component={MealsDetailScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}
