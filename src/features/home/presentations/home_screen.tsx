import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenCardItem from './components/card_item/card_item';



const HomeScreen = () => {

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title="CS 2 Guide" isbackArrowVisible={false} />

            <HomeScreenCardItem
                title='AGENTS'
                description='Click here to see all agents in the game.'
                path='Agents'
            ></HomeScreenCardItem>
        </SafeAreaView>
    );
};

export default HomeScreen;
