import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput } from 'react-native';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAgents, setSearchTerm } from './redux/agents_slice.tsx';
import AgentCard from './components/agent_card/agent_card.tsx';
import SearchArea from './components/search_area/search_area.tsx';
import AppTypography from '../../../product/styles/app_typography.js';

const AgentsScreen = () => {
    const dispatch = useDispatch();
    const { data: agents, loading, error, searchTerm } = useSelector(state => state.agents);

    useEffect(() => {
        dispatch(fetchAgents());
    }, [dispatch]);

    const filteredAgents = agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title="Agents" />

            <View style={{ paddingHorizontal: 16 }}>
                <SearchArea onChangeText={(text) => dispatch(setSearchTerm(text))}
                    searchTerm={searchTerm}
                ></SearchArea>
            </View>

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
                <View style={{ flex: 1, paddingHorizontal: 16 }}>
                    <FlatList
                        data={filteredAgents}
                        keyExtractor={(item, index) => item.id || `agent-${index}`}
                        renderItem={({ item }) => <AgentCard agent={item} />}
                        contentContainerStyle={
                            filteredAgents.length === 0
                                ? { flex: 1, justifyContent: 'center', alignItems: 'center' }
                                : {}
                        }
                        ListEmptyComponent={
                            !loading && (
                                <Text style={AppTypography.bodyLarge}>
                                    No agents found
                                </Text>
                            )
                        }
                    />
                </View>

            )}
        </SafeAreaView>
    );
};

export default AgentsScreen;
