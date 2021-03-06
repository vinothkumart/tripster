import React, { Component } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

const instructions = Platform.select({
    ios: 'shake for dev menu',
    android: 'Shake or press menu button for dev menu',
});

export default class MessagesScreen extends Component {
    static navigationOptions = {
        title: 'Messages',
    };

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#4F6D7A"
                    />
                    <Text style={styles.welcome}>
                        Messages is commin
                    </Text>
                    <Text style={styles.instructions}>
                        Messages is commin
                    </Text>
                    <Text style={styles.instructions}>
                        {instructions}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#F5FCFF',
        marginBottom: 5,
    },
});