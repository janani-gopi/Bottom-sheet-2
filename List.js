import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { View, ScrollView, StyleSheet, TextInput } from "react-native";

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
  { label: "param11", value: 11 },
  { label: "param12", value: 12 },
  { label: "param13", value: 13 },
  { label: "param14", value: 14 },
  { label: "param15", value: 15 },
  { label: "param16", value: 16 },
  { label: "param17", value: 17 },
  { label: "param18", value: 18 },
  { label: "param19", value: 19 },
  { label: "param20", value: 20 },
];
export default function List({ setSelectedvalue, selectedValue, searchInput }) {
  //state initialization

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
                buttonOuterColor={selectedValue === i + 1 ? "#2196f3" : "#000"}
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
<RadioForm radio_props={radio_props} initial={0} />;
