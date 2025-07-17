import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { fetchAgents, setSearchTerm } from './redux/agents_slice';
import AgentCard from './components/agent_card/agent_card';
import AppTypography from '../../../product/styles/app_typography';
import { Agent, AgentsState } from './model/agent_card_model';
import SearchArea from '../../../product/components/search_area/search_area';

type RootState = {
    agents: AgentsState;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const AgentsScreen: React.FC = () => {
    const dispatch = useDispatch();
    const { data: agents, loading, error, searchTerm } = useTypedSelector(state => state.agents);

    useEffect(() => {
        dispatch(fetchAgents() as any);
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
                <SearchArea
                    labelText="Search agents..."
                    onChangeText={(text) => dispatch(setSearchTerm(text))}
                    searchTerm={searchTerm}
                />
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
                                <Text style={AppTypography.bodyLarge_Bold}>
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
