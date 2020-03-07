import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Picker,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from "react-native";

const DismissKeyboard = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

class TransferScreen extends Component {
    // Transfer money between Account and Bank
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            amount: "",
            transferMoneyFrom: null,
            transferMoneyTo: null
        };
    }

    render() {
        const { container, title } = style;
        return (
            <View>
                <Text>Transfer Screen Yeet</Text>
                <DismissKeyboard>
                    <View>
                        <TextInput
                            placeholder="Enter amount"
                            keyboardType="numeric"
                            onChangeText={amount => this.setState({ amount })}
                            value={this.state.amount}
                        />
                    </View>
                </DismissKeyboard>
                <View>
                    <Text style={title}>From</Text>
                    <Picker
                        selectedValue={this.state.transferMoneyFrom}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ transferMoneyFrom: itemValue })
                        }
                    >
                        <Picker.Item
                            label="Account - $400.25"
                            value="$400.25"
                        />
                        <Picker.Item
                            label="Wells Fargo Checking"
                            value="Bank"
                        />
                    </Picker>

                    <Text style={title}>To</Text>
                    <Picker
                        selectedValue={this.state.transferMoneyTo}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({ transferMoneyTo: itemValue });
                        }}
                    >
                        <Picker.Item
                            label="Account - $400.25"
                            value="$400.25"
                        />
                        <Picker.Item
                            label="Wells Fargo Checking"
                            value="Bank"
                        />
                    </Picker>
                </View>
                <View>
                    <Button
                        title="Transfer"
                        onPress={() => {
                            if (
                                this.state.transferMoneyFrom ==
                                this.state.transferMoneyTo
                            ) {
                                Alert.alert(
                                    "Unsucessful Transfer",
                                    "Please choose two different accounts to transfer between.",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () =>
                                                console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        {
                                            text: "OK",
                                            onPress: () =>
                                                console.log("OK Pressed")
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 10
    },
    title: {
        textAlign: "center"
    }
});

export default TransferScreen;
