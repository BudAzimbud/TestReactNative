import {  StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textNotFound: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    color: 'gray',
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  scrollBar: {
    position: 'absolute',
    right: 5,
    width: 4, // Smaller width for thin scrollbar
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 2,
  },
  
});
