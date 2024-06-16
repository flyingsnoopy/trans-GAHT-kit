import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc";


function AddNewScheme() {
    return (
        <Pressable style={tw.style`rounded-md border flex flex-row items-center justify-center h-8`}>
            <View style={tw.style`flex flex-row mx-2`}>
                <MaterialIcons name="add" color="#25292e" size={16} />
                <Text>Add Scheme</Text>
            </View>
        </Pressable>
    )
}

export function BottomBar() {
    return (
        <View style={tw.style`flex gap-4 items-center justify-center h-36`}>
            <AddNewScheme/>
        </View>
    )
}