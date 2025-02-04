import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});
