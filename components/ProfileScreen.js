import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Balances from "./Balances";
import Actions from "./Actions";
import PaymentsScreen from "./PaymentsScreen";
import TransactionsScreen from "./TransactionsScreen";

class ProfileScreen extends Component {
    // Landing Screen, overview of account & profile
    render() {
        const {
            container,
            titles,
            profileContainer,
            balancesContainer,
            actionsContainer,
            paymentsContainer,
            transactionsContainer
        } = styles;

        return (
            <View style={container}>
                <View style={profileContainer}>

                </View>
                <View style={balancesContainer}>
                    <Text style={titles}>Balances</Text>
                    <Balances />
                </View>
                <View style={actionsContainer}>
                    <Text style={titles}>Actions</Text>
                    <Actions />
                </View>
                <View style={paymentsContainer}>
                    <PaymentsScreen />
                </View>
                <View style={transactionsContainer}>
                    <TransactionsScreen />
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
    titles: { textAlign: "center" },
    profileContainer: {
        flex: 2
    },
    balancesContainer: {
        flex: 1,
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
