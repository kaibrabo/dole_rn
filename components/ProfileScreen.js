import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Balances from "./Balances";
import Actions from "./Actions";
import Payments from "./Payments";

class ProfileScreen extends Component {
    render() {
        const { container, textColor } = styles;
        return (
            <View style={container}>
                <Text>Balances</Text>
                <Balances />
                <Text>Actions</Text>
                <Actions />
                <Text>Payments</Text>
                <Payments />
                <Text>Transactions</Text>
                <View></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        color: "white",
        display: "flex",
        flex: 1,
        alignItems: "center"
    },
    textColor: {}
});

export default ProfileScreen;
