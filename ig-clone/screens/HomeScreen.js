import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

import Header from "../components/Header";
import Stories from "../components/Stories";

function HomeScreen () {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    
})