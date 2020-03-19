import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import { IOS_CLIENT_ID } from "../constants";
import Balances from "./Balances";
import Actions from "./Actions";
import PaymentsScreen from "./PaymentsScreen";
import TransactionsScreen from "./TransactionsScreen";

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: ""
        };
    }

    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                // androidClientId:
                // "106104...-fmv....apps.googleusercontent.com",
                iosClientId: IOS_CLIENT_ID,
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    photoUrl: result.user.photoUrl
                });
            } else {
                console.log("cancelled");
            }
        } catch (e) {
            console.log("error: ", e);
        }
    };
    // Landing Screen, overview of account & profile
    render() {
        const {
            container2,
            titles,
            profileContainer,
            balancesContainer,
            actionsContainer,
            paymentsContainer,
            transactionsContainer
        } = styles;

        return (
            <View style={styles.container1}>
                {this.state.signedIn ? (
                    <View style={container2}>
                        <View style={profileContainer}>
                            <LoggedInPage
                                name={this.state.name}
                                photoUrl={this.state.photoUrl}
                            />
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
                ) : (
                    <LoginPage signIn={this.signIn} />
                )}
            </View>
        );
    }
}

const LoginPage = props => {
    return (
        <View>
            <Text style={styles.header}>Sign In With Google</Text>
            <Button
                title="Sign in with Google"
                onPress={() => props.signIn()}
            />
        </View>
    );
};

const LoggedInPage = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome: {props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    container2: {
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
        flex: 1
    },
    actionsContainer: {
        flex: 1
    },
    paymentsContainer: {
        flex: 2
    },
    transactionsContainer: {
        flex: 2
    },
    header: {
        fontSize: 25
    },
    image: {
        marginTop: 15,
        width: 50,
        height: 50,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        borderRadius: 50
    }
});

export default ProfileScreen;
