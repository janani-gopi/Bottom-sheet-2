import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { View, ScrollView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
let radio_props = [
  { label: "param1", value: 1 },
  { label: "param2", value: 2 },
  { label: "param3", value: 3 },
  { label: "param4", value: 4 },
  { label: "param5", value: 5 },
  { label: "param6", value: 6 },
  { label: "param7", value: 7 },
  { label: "param8", value: 8 },
  { label: "param9", value: 9 },
  { label: "param10", value: 10 },
];
export default function List({setSelectedvalue,selectedValue}) {
  //state initialization
  const [searchInput, setSearchinput] = useState("");
  //search function
  function searchInputHandler(item) {
    if (searchInput) {
      if (item.label.toLowerCase().includes(searchInput.toLowerCase())) {
        return item;
      }
    } else {
      return item;
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search"
        onChangeText={(e) => setSearchinput(e)}
      />
      <ScrollView>
        <RadioForm formVertical={true} animation={true}>
          {radio_props
            .filter((item) => {
              return searchInputHandler(item);
            })
            .map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={selectedValue === i + 1}
                  onPress={(value) => {
                    setSelectedvalue(value);
                    console.log(value);
                  }}
                  borderWidth={1}
                  borderRadius={10}
                  buttonOuterColor={
                    selectedValue === i + 1 ? "#2196f3" : "#000"
                  }
                  buttonSize={15}
                  buttonOuterSize={20}
                  buttonStyle={{ margin: 15, marginRight: 80, marginLeft: -10 }}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setSelectedvalue(value);
                    console.log(value);
                  }}
                  labelStyle={{ fontSize: 20, color: "gray" }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))}
        </RadioForm>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
    marginBottom: 20,
  },
});
<RadioForm radio_props={radio_props} initial={0} />;
