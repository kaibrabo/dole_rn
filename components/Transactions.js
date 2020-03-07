import React, { Component } from "react";
import { Text, View } from "react-native";

function Transactions() {
    const { container } = styles;
    return (
        <View style={container}>
            <View>
                <Text>Date</Text>
            </View>
            <View>
                <Text>To / From</Text>
            </View>
            <View>
                <Text>Amount</Text>
            </View>
        </View>
    );
}

const styles = {
    container: { flexDirection: "row", justifyContent: "space-around" }
};

export default Transactions;
