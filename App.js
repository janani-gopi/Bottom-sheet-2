import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useCallback, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RadioInput from "./RadioInput";
import { DatePickerModal } from "react-native-paper-dates";

export default function App() {
  //state initialization for the checked radio input
  const [checked, setChecked] = useState();
  //state initialization for the search input
  const [searchInput, setSearchinput] = useState("");

  //state initialization for the range of dates selected
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });

  //state initialization for the open and close of date module
  const [open, setOpen] = useState(false);

  //bottomsheet ref for the two of the bottom sheet
  const bottomSheet1ModalRef = useRef(null);
  const bottomSheet2ModalRef = useRef(null);

  //function to open the bottom sheet
  const handlePresentModal1Press = useCallback(() => {
    bottomSheet1ModalRef.current?.present();
  }, []);
  const handlePresentModal2Press = useCallback(() => {
    bottomSheet2ModalRef.current?.present();
  }, []);

  //function to render the backdrop when the bottom sheet is open
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );
  //function when the Datemodule is closed
  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  //function when the dates are selected
  const onConfirm = useCallback(
    ({ startDate, endDate }) => {
      setRange({ startDate, endDate });
      setOpen(false);
    },
    [setOpen, setRange]
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <DatePickerModal
          locale="en"
          mode="range"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
        />
        <BottomSheetModalProvider>
          <View style={styles.container}>
            <View
              style={styles.flexcontainer}
            >
              <Pressable
                onPress={() => {
                  handlePresentModal1Press();
                }}
                style={styles.button}
              >
                <Text
                  style={styles.text}
                >
                  {checked ? checked : "Site"}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  handlePresentModal2Press();
                }}
                style={styles.button}
              >
                <Text
                  style={styles.text}
                >
                  {range.startDate && range.endDate
                    ? `${range.startDate
                        .toDateString()
                        .split(" ")
                        .slice(1)
                        .join(" ")} to ${range.endDate
                        .toDateString()
                        .split(" ")
                        .slice(1)
                        .join(" ")}`
                    : "Date"}
                </Text>
              </Pressable>
            </View>
            <BottomSheetModal
              ref={bottomSheet2ModalRef}
              index={1}
              snapPoints={["40%", "50%", "90%"]}
              backdropComponent={renderBackdrop}
            >
              <TouchableOpacity
                onPress={() => {
                  setOpen(true);
                }}
              >
                <Text style={styles.modalopenertext}>Custom date</Text>
              </TouchableOpacity>
            </BottomSheetModal>
            <BottomSheetModal
              ref={bottomSheet1ModalRef}
              index={1}
              snapPoints={["40%", "50%", "90%"]}
              backdropComponent={renderBackdrop}
            >
              <TextInput
                style={styles.input}
                placeholder="search"
                onChangeText={(e) => setSearchinput(e)}
              />
              <BottomSheetScrollView>
                <RadioInput
                  setChecked={setChecked}
                  checked={checked}
                  bottomSheet1ModalRef={bottomSheet1ModalRef}
                />
              </BottomSheetScrollView>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: "#e5e5e5",
    marginBottom: 10,
    margin: 20,
  },
  modalopenertext: {
    padding: 30,
    color: "#ffc30b",
  },
  text:{
    color: "#ffc30b",
    textAlign: "center",
    fontSize: 20,
  },
  button:{
    borderWidth: 2,
    padding:10,
    width: 320,
    borderRadius: 15,
    borderColor: "#ffc30b",
  },
  flexcontainer:{
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    alignItems: "center",
  }
});
 