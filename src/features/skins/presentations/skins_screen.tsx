import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { Skin, SkinsState } from './models/skin_card_model'; // kendi pathine göre güncelle!
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../../product/components/appbar';
import { appStyle } from '../../../product/styles/app_style';
import { skinsScreenStyle } from './styles/skins_screen_styles';
import SkinsScreenCardItem from './components/skin_item_card/skin_item_card';
import SearchArea from '../../../product/components/search_area/search_area';
import { fetchSkins, setSearchTerm } from './redux/skins_slice';


type RootState = {
    skins: SkinsState;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const SkinListScreen: React.FC = () => {
    const dispatch = useDispatch();
    const { data: skins, loading, error, searchTerm } = useTypedSelector(state => state.skins);

    useEffect(() => {
        dispatch(fetchSkins() as any);
    }, [dispatch]);



    const filteredSkins = skins.filter(skin =>
        skin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skin.team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title="Skins" />
            <View style={{ paddingHorizontal: 16 }}>
                <SearchArea
                    labelText="Search skins..."
                    onChangeText={(text) => dispatch(setSearchTerm(text))}
                    searchTerm={searchTerm}
                />
            </View>
            <View style={{ flex: 1 }}>
                {loading ? (
                    <View style={skinsScreenStyle.center}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={{ color: "#fff", marginTop: 8 }}>Loading skins...</Text>
                    </View>
                ) : error ? (
                    <View style={skinsScreenStyle.center}>
                        <Text style={{ color: 'red' }}>{error}</Text>
                    </View>
                ) : (
                    <FlatList
                        data={filteredSkins}
                        keyExtractor={item => item.id.toString()}
                        contentContainerStyle={{ padding: 16, flexGrow: 1 }}
                        renderItem={({ item }) => (
                            <SkinsScreenCardItem skin={item} />
                        )}
                        ListEmptyComponent={
                            <Text style={{ color: "#fff", marginTop: 32, textAlign: 'center' }}>
                                No skins found.
                            </Text>
                        }
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default SkinListScreen;
