import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context"; // in App.js
import SafeAreaView from "react-native-safe-area-view"; // in each component

class App extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <AppContainer />
            </SafeAreaProvider>
        );
    }
}

class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>Home Screen</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default App;
