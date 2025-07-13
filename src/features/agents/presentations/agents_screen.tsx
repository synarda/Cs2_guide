import React from 'react';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';



const AgentsScreen = ({
    url = ''
}) => {

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title={"Agents"} />
        </SafeAreaView>
    );
};

export default AgentsScreen;
