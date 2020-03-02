import React, { Component } from "react";
import { Text, View } from "react-native";

class Balances extends Component {
    render() {
        const { container, availableBalance, borrowedBalance } = styles;
        return (
            <View style={container}>
                <View style={availableBalance}>
                    <Text>+ $420</Text>
                </View>
                <View style={borrowedBalance}>
                    <Text>- $250</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: { flexDirection: "row", justifyContent: "space-around" },
    availableBalance: {
        flexDirection: ""
    },
    borrowedBalance: {}
};

export default Balances;
