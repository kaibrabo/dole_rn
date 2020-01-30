import React, { Component } from "react";
import { ScrollView, FlatList, ListItem, Text, View } from "react-native";

class Payments extends Component {
    state = {
        payments: [{ date: "01/01/2020", account: "Dole", amount: 400 }]
    };

    render() {
        return (
            <View>
                <View>
                    <Text>Date</Text>
                    <Text>Account</Text>
                    <Text>Amount</Text>
                </View>

            </View>
        );
    }
}

export default Payments;
