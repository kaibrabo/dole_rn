import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Balances from "./Balances";
import Actions from "./Actions";
import Payments from "./Payments";
import Transactions from "./Transactions";

class ProfileScreen extends Component {
    // Landing Screen, overview of account & profile
    render() {
        const {
            container,
            balancesContainer,
            actionsContainer,
            paymentsContainer,
            transactionsContainer
        } = styles;

        return (
            <View style={container}>
                <View style={balancesContainer}>
                    <Text>Balances</Text>
                    <Balances />
                </View>
                <View style={actionsContainer}>
                    <Text>Actions</Text>
                    <Actions />
                </View>
                <View style={paymentsContainer}>
                    <Payments />
                </View>
                <View style={transactionsContainer}>
                    <Text>Transactions</Text>
                    <Transactions />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        display: "flex",
        flex: 1,
        alignItems: "stretch"
    },
    titles: { alignItems: "center" },
    balancesContainer: {
        flex: 1
    },
    actionsContainer: {
        flex: 1
    },
    paymentsContainer: {
        flex: 2
    },
    transactionsContainer: {
        flex: 2
    }
});

export default ProfileScreen;
