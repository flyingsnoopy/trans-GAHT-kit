import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { BottomBar } from './components/BottomBar';
import { AddNewSchemeModal } from "./components/AddNew";
import tw from "twrnc";

const PlaceholderImage = require('./assets/progynova.jpg');

var display = (
  <View style={tw.style`flex flex-row justify-between w-full`}>
    <Text style={tw.style`text-gray-400 w-1/6`}>12:00</Text>
    <View style={tw.style`flex flex-col w-3/4`}>
      <View style={tw.style`flex flex-row w-full border rounded-md`}>
        <Image style={tw.style`h-20 w-36 m-2`} source={PlaceholderImage} />
        <View style={tw.style`h-full flex flex-col items-start gap-1 m-2`}>
          <Text>戊酸雌二醇</Text>
          <Text>Estrogen</Text>
          <Text>PO</Text>
        </View>
      </View>
    </View>
    
  </View>
)



export default function App() {
  const [isAddSchemeVisble,setIsAddSchemeVisble] = useState(false)
  return (
    <View style={styles.container}>
      <View style={tw.style`flex-auto flex-col gap-2 m-6`}>
        {display}
      </View>
      <BottomBar OpenAddScheme={() => setIsAddSchemeVisble(true)}/>
      <AddNewSchemeModal isVisble={isAddSchemeVisble} Close={() => setIsAddSchemeVisble(false)}/>
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
