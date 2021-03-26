import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthToDp,heightToDp} from "../../constants/deviceDimensions"


const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Icon style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    margin: widthToDp(2),
    padding: widthToDp(1),
    backgroundColor: "#F0EEEE",
    borderRadius: widthToDp(2),
    height: heightToDp(7),
    flexDirection: "row",elevation:2,
    width: widthToDp(90)
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: widthToDp(1)
  }
});

export default SearchBar;