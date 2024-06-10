import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={tw.style`flex flex-col gap-2 w-11/12`}>
        <View style={tw.style`flex flex-row justify-between w-full`}>
          <Text style={tw.style`text-gray-400 w-1/6`}>12:00</Text>
          <View style={tw.style`flex flex-col w-2/3`}>
            <Text></Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"flex-start",
    marginTop:'0.75rem',
  },
});
