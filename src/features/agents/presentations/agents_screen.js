import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAgents } from './redux/agents_slice.tsx';
import AgentCard from './components/agent_card.tsx';

const AgentsScreen = () => {
    const dispatch = useDispatch();
    const { data: agents, loading, error } = useSelector(state => state.agents);

    useEffect(() => {
        dispatch(fetchAgents());
    }, [dispatch]);

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title="Agents" />

            {error ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'red', textAlign: 'center', padding: 20 }}>
                        {error}
                    </Text>
                </View>
            ) : loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={{ color: '#fff', marginTop: 10 }}>Loading agents...</Text>
                </View>
            ) : (
                <FlatList
                    data={agents}
                    keyExtractor={(item, index) => item.id || `agent-${index}`}
                    renderItem={({ item }) => (
                        <AgentCard agent={item} />
                    )}
                    contentContainerStyle={agents.length === 0 ? { flex: 1, justifyContent: 'center', alignItems: 'center' } : {}}
                    ListEmptyComponent={
                        !loading && (
                            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 50 }}>
                                No agents found
                            </Text>
                        )
                    }
                />
            )}
        </SafeAreaView>
    );
};

export default AgentsScreen;