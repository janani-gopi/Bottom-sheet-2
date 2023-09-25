import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
const RadioInput = ({ checked, setChecked, bottomSheet1ModalRef }) => {
  
//function when the radio input is selected
  const handleRadioChange = (value) => {
    setChecked(value);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setChecked();
          bottomSheet1ModalRef.current?.close();
        }}
      > 
        <Text
          style={{
            padding: 15,
            color: "#ffc30b",
            marginLeft: 20,
          }}
        >
          Clear all
        </Text>
      </TouchableOpacity>
      <RadioButton.Group onValueChange={handleRadioChange} value={checked}>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 1" color="#ffc30b" />
          <Text style={styles.text}>Option 1</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 2" color="#ffc30b" />
          <Text style={styles.text}>Option 2</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 3" color="#ffc30b" />
          <Text style={styles.text}>Option 3</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 4" color="#ffc30b" />
          <Text style={styles.text}>Option 4</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 5" color="#ffc30b" />
          <Text style={styles.text}>Option 5</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 6" color="#ffc30b" />
          <Text style={styles.text}>Option 6</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 7" color="#ffc30b" />
          <Text style={styles.text}>Option 7</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 8" color="#ffc30b" />
          <Text style={styles.text}>Option 8</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 9" color="#ffc30b" />
          <Text style={styles.text}>Option 9</Text>
        </View>
        <View style={styles.flexcontainer}>
          <RadioButton value="Option 10" color="#ffc30b" />
          <Text style={styles.text}>Option 10</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default RadioInput;

const styles = StyleSheet.create({
  flexcontainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 6,
    marginLeft: 20,
  },
});
