import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title={"CS 2 Guide"} />
        </SafeAreaView>
    );
};

export default HomeScreen;
