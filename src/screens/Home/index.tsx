import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  useColorScheme,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Searchbar from '../../components/Header/Searchbar';
import {styles} from './style';
import {getList} from '../../action/list';
import {useDebounce} from '../../utils/helper';
import {MusicTrack} from '../../interface';
import {CardMusicTrack} from './components/CardMusicTrack';
import { useNavigation } from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: Props): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [term, setTerm] = useState('');
  const [list, setList] = useState<MusicTrack[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const debouncedSearch = useDebounce((e: string) => {
    setTerm(e);
  }, 1000);

  useEffect(() => {
    setLoading(true);
    getList({term})
      .then(res => {
        setList(res.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [term]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Searchbar onChange={debouncedSearch} scrollY={scrollY} />

      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : list.length > 0 ? (
          <View style={{flex: 1}}>
            <FlatList
              data={list}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {data: item});
                  }}>
                  <CardMusicTrack item={item} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.trackId?.toString?.()}
              showsVerticalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}
            />
          </View>
        ) : (
          <Text style={styles.textNotFound}>
            {
              term.length > 0 ? 'No results found' : 'Find your favorite entertainment'
            }
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Home;
