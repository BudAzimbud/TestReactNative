import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styles} from './style';
import {MusicTrack} from '../../../../interface';
var width = Dimensions.get('window').width;
const icons = {
  song: require('../../../../assets/png/love-song.png'),
  'feature-movie': require('../../../../assets/png/movie.png'),
  podcast: require('../../../../assets/png/podcast.png'),
  'tv-episode': require('../../../../assets/png/movie.png'),
};

export const CardMusicTrack = ({item}: {item: MusicTrack}) => {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Image source={{uri: item.artworkUrl100}} style={styles.image} />
        <View style={styles.content}>
          <View
            style={[styles.row, {width: 'auto', justifyContent: 'flex-start'}]}>
            <Text numberOfLines={1} style={styles.title}>
              {item.trackName}
            </Text>
           
            <Image
              source={icons[item.kind as keyof typeof icons]}
              style={styles.icon}
            />
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.subtitle}>{item.artistName}</Text>
          </View>

          <View style={[{marginTop: 10}]}>
            {item.discNumber && <Text style={styles.discNumber}>${item.discNumber}</Text>}
            <Text style={styles.price}>${item.trackPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
