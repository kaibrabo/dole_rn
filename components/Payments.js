import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Payments() {
    const { container, detailHeaders } = styles;
    const navigation = useNavigation();

    return (
        <View style={container}>
            <View>
                <Button
                    title="Payments"
                    onPress={() => navigation.navigate("Payments")}
                />
            </View>
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
    detailHeaders: {flexDirection: "row", justifyContent: "space-around"}
};

export default Payments;
