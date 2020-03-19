import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./components/ProfileScreen";
import PayScreen from "./components/PayScreen";
import PaymentsScreen from "./components/PaymentsScreen";
import TransferScreen from "./components/TransferScreen";
import TransactionsScreen from "./components/TransactionsScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ProfileScreen} />
                <Stack.Screen name="Pay" component={PayScreen} />
                <Stack.Screen name="Payments" component={PaymentsScreen} />
                <Stack.Screen name="Transfer" component={TransferScreen} />
                <Stack.Screen
                    name="Transactions"
                    component={TransactionsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
