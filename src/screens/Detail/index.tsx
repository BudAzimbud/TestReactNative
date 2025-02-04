import {StackScreenProps} from '@react-navigation/stack';
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './style';
import React, {useEffect, useRef, useState} from 'react';

const {width} = Dimensions.get('window');
const IMAGE_HEIGHT = (width * 4) / 3;

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const Detail = ({navigation, route}: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacity = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [1, 0.4],
  });

  const scale = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [1, 1.3],
    extrapolate: 'clamp',
  });

  const imageStyle = {
    opacity,
    transform: [{scale}],
  };

  const [blurRadius, setBlurRadius] = useState(0);

  useEffect(() => {
    const listenerId = scrollY.addListener(({value}: {value: number}) => {
      if (value >= 0 && value <= IMAGE_HEIGHT) {
        setBlurRadius(value / (IMAGE_HEIGHT / 10));
      }
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY]);

  const {data} = route.params;

  const openUrl = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
         
        ]}>
        <Animated.Image
          source={{uri: data.artworkUrl100}}
          style={[styles.image, imageStyle]}
          resizeMode="cover"
          blurRadius={blurRadius}
        />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/png/back.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <Text style={[styles.heading, {}]}>{data.trackName}</Text>
        <View style={styles.body}>
          <Text style={styles.artist}>{data.artistName}</Text>
          <Text style={styles.subheading}>Album: {data.collectionName}</Text>
          <Text style={[styles.detail, { marginTop: 10}]}>
            Released: {new Date(data.releaseDate).toDateString()}
          </Text>
          <Text style={[styles.detail,]}>Genre: {data.primaryGenreName}</Text>
          <Text style={styles.detail}>
            Price: {data.currency} {data.trackPrice}
          </Text>
          <Text style={styles.detail}>
            Duration: {Math.floor(data.trackTimeMillis / 60000)}:
            {((data.trackTimeMillis % 60000) / 1000)
              .toFixed(0)
              .padStart(2, '0')}{' '}
            minutes
          </Text>
          <Text
            style={styles.link}
            onPress={() => {
              openUrl(data.trackViewUrl);
            }}>
            Open Apple Music
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Detail;
