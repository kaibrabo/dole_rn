import React, { Component } from "react";
import { Text, View } from "react-native";

class Actions extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <View>
                    <Text>Pay</Text>
                </View>
                <View>
                    <Text>Transfer</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: { flexDirection: "row", justifyContent: "space-around" }
};

export default Actions;
