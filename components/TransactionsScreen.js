import React, { Component } from "react";
import { Text, View, Button,  } from "react-native";
import { useNavigation } from "@react-navigation/native";


function TransactionsScreen() {
    const { container, title, detailHeaders } = styles;
    const navigation = useNavigation();
    return (
        <View style={container}>
            <Button title="Transactions" style={title} onPress={() => navigation.navigate("Transactions")}>Transactions</Button>
            <View style={detailHeaders}>
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
        </View>
    );
}

const styles = {
    container: { flexDirection: "column", justifyContent: "space-around" },
    title: { textAlign: "center" },
    detailHeaders: {flexDirection: "row", justifyContent: "space-around"}
};

export default TransactionsScreen;
