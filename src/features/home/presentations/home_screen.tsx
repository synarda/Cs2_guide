import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenCardItem from './components/card_item/card_item';
import { imagesPaths } from '../../../product/constants/paths';


const HomeScreen = () => {

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title="CS 2 Guide" isbackArrowVisible={false} />

            <HomeScreenCardItem
                title='AGENTS'
                description='Click here to see all agents in the game.'
                path='Agents'
                photoUrl={imagesPaths.st6_soldier}

            ></HomeScreenCardItem>
            <HomeScreenCardItem
                title='Skins'
                description='Click here to see all Skins in the game.'
                path='Skins'
                photoUrl={imagesPaths.guns}

            ></HomeScreenCardItem>
            <HomeScreenCardItem
                title='Stickers'
                description='Click here to see all Stickers in the game.'
                path='Agents'
                photoUrl={imagesPaths.stickers}

            ></HomeScreenCardItem>

        </SafeAreaView >
    );
};

export default HomeScreen;
