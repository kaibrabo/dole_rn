import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Actions() {
    const { container } = styles;
    const navigation = useNavigation();
    return (
        <View style={container}>
            <View>
                <Button
                    title="Pay"
                    onPress={() => navigation.navigate("Pay")}
                />
            </View>
            <View>
                <Button
                    title="Transfer"
                    onPress={() => navigation.navigate("Transfer")}
                />
            </View>
        </View>
    );
}

const styles = {
    container: { flexDirection: "row", justifyContent: "space-around" }
};

export default Actions;
