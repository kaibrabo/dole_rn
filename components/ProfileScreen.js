import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Balances from "./Balances";
import Actions from "./Actions";
import Payments from "./Payments";
import Transactions from "./Transactions";

class ProfileScreen extends Component {
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
                    <Text>Payments</Text>
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
        backgroundColor: "#555",
        display: "flex",
        flex: 1,
        alignItems: "stretch"
    },
    titles:{ alignItems:"center"},
    balancesContainer: {
        backgroundColor: "#03cafc",
        flex: 1,
    },
    actionsContainer: {
        backgroundColor: "#ff03f7",
        flex: 1
    },
    paymentsContainer: {
        backgroundColor: "#00ff15",
        flex: 2
    },
    transactionsContainer: {
        backgroundColor: "#ff9500",
        flex: 2
    }
});

export default ProfileScreen;
