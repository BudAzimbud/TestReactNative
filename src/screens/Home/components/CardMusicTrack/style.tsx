import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection:'row',
    shadowOffset: {
      width: 1,
      height: 0.3,
    },
    borderRadius: 5,
    width: '100%',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400'
  },
  content: {
    padding:5,
    marginLeft:20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    alignContent:'flex-end',
    alignItems:'flex-end',
  },
  icon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginLeft:10
  },
  more: {
    color:'blue',
    fontSize:12,
    fontWeight:'600'
  },
  discNumber: {
    color:'gray',
    fontSize:12,
    fontWeight:'600',
    textDecorationLine:'line-through'
  },
  country: {
    fontSize:10,
    fontWeight:'600',
    color:'gray',
  },
  price: {
    fontSize:12,
    fontWeight:'600',
    marginTop:5
  }
});
