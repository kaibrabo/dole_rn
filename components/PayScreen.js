import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Picker,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";

// TODO: Fix Keyboard.dismiss when touching outside of numeric keyboard
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class PayScreen extends Component {
    // Pay specific user, for specific amount (with payment-back feature), from account or bank
    constructor(props) {
        super(props);
        this.state = { text: "", amount: "" };
    }

    render() {
        const { container, element, button } = styles;
        return (
            <View style={container}>
                <Text>Pay Screen Yeet</Text>
                <DismissKeyboard>
                    <View style={element}>
                        <Text>To:</Text>
                        <TextInput
                            // style={{ height: 40 }}
                            placeholder="Search recipient"
                            onChangeText={text => this.setState({ text })}
                            value={this.state.text}
                        />
                        <Text>Amount:</Text>
                        <TextInput
                            // style={{ height: 40 }}
                            placeholder="Enter amount"
                            keyboardType="numeric"
                            onChangeText={amount => this.setState({ amount })}
                            value={this.state.amount}
                        />
                    </View>
                </DismissKeyboard>
                <View>
                    <View style={element}>
                        <Picker
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }
                        >
                            <Picker.Item
                                label="Account - $400.25"
                                value="java"
                            />
                            <Picker.Item
                                label="Wells Fargo Checking"
                                value="js"
                            />
                        </Picker>
                    </View>
                </View>
                <View style={button}>
                    <Button title="Pay" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10
    },
    element: {
        alignSelf: "stretch",
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black"
    },
    button: {
        alignSelf: "stretch",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        justifyContent: "flex-end"
    }
});

export default PayScreen;
