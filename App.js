import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { BottomBar } from './components/BottomBar';
import { AddNewSchemeModal, AddNewMedicineModal } from "./components/AddNew";
import { medicine } from "./assets/data.json";
import tw from "twrnc";


var display = (
  <View style={tw.style`flex flex-row justify-between w-full`}>
    <Text style={tw.style`text-gray-400 w-28`}>12:00</Text>
    <View style={tw.style`flex flex-col`}>
      <View style={tw.style`flex flex-row w-full border rounded-md`}>
        <Image style={tw.style`h-26 w-26 m-2`} source={"./assets/image/progynova-cn.jpg"} />
        <View style={tw.style`h-full flex flex-col items-start gap-1 m-2`}>
          <Text>{medicine["progynova-cn"].EnglishTradeName}</Text>
          <Text>{medicine["progynova-cn"].EnglishGenericName}</Text>
          <Text>{medicine["progynova-cn"].Dosage}</Text>
        </View>
      </View>
    </View>

  </View>
)



export default function App() {
  const [isAddSchemeVisble, setIsAddSchemeVisble] = useState(false)
  const [isAddMedicineVisble, setIsAddMedcineVisble] = useState(false)
  return (
    <View style={styles.container}>
      <View style={tw.style`flex-auto flex-col gap-2 m-6`}>
        {display}
      </View>
      <BottomBar
        OpenAddScheme={() => setIsAddSchemeVisble(true)}
        OpenAddMedicine={() => setIsAddMedcineVisble(true)} />
      <AddNewSchemeModal isVisble={isAddSchemeVisble} Close={() => setIsAddSchemeVisble(false)} />
      <AddNewMedicineModal isVisble={isAddMedicineVisble} Close={() => setIsAddMedcineVisble(false)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
});
