import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const IMAGE_HEIGHT = (width * 4) / 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust for safe area
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  body: {
    marginTop: IMAGE_HEIGHT, // Push content below the image
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    position: 'absolute',
    bottom: 260,
    left: 20,
    color: '#333',
    zIndex: 1, // Ensures text is on top
    paddingVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },

  artist: {
    fontSize: 18,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
