import { MaterialIcons } from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, Pressable } from "react-native"
import tw from "twrnc";


function AddNew({ OpenModal, Text }) {
    return (
        <Pressable style={tw.style`rounded-md border flex flex-row items-center justify-center h-8`} onPress={OpenModal}>
            <View style={tw.style`flex flex-row items-center mx-2`}>
                <MaterialIcons name="add" color="#25292e" size={16} />
                <Text>{"Add " + Text}</Text>
            </View>
        </Pressable>
    )
}

function IconButton({ OpenModal,Icon }){
    return(
        <Pressable style={tw.style`w-8 h-8 flex items-center justify-center`} onPress={OpenModal}>
            <AntDesign name={Icon} color="#25292e" size={24}/>
        </Pressable>
    )
}

export function BottomBar({ OpenAddScheme, OpenAddMedicine }) {
    return (
        <View style={tw.style`flex flex-row gap-4 items-start justify-center m-4`}>
            <View style={tw.style`w-8 flex flex-col gap-2 items-end justify-center`}>
                <IconButton Icon={"setting"}/>
                <IconButton Icon={"medicinebox"}/>
            </View>
            <View style={tw.style`flex flex-col gap-2 items-start justify-center`}>
                <AddNew OpenModal={OpenAddScheme} Text={"Scheme"} />
                <AddNew Text={"Medicine"} />
            </View>
        </View>

    )
}