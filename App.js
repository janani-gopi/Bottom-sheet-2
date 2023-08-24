import { StyleSheet, Text, View, Button} from "react-native";
import { useRef, useCallback ,useState} from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import List from "./List";

export default function App() {
  const [selectedValue, setSelectedvalue] = useState("");
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Text style={{padding:20}}>Selected value : {selectedValue}</Text>
          <Button
            onPress={handlePresentModalPress}
            title="Open bottom sheet"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={["40%", "50%", "90%"]}
            // onChange={handleSheetChanges}
          >
            <View>
              <List setSelectedvalue={setSelectedvalue} selectedValue={selectedValue} />
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
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
});
