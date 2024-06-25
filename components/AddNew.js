import { MaterialIcons } from "@expo/vector-icons";
import { Modal, View, Text, Pressable } from "react-native";
import tw from "twrnc"

export function AddNewSchemeModal({ isVisble,Close }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisble}>
            <Pressable style={tw.style`w-full h-1/4 absolute top-0`} onPress={Close}/>
            <View style={tw.style`w-full h-3/4 rounded-t absolute bottom-0 bg-white`}>
                <View style={tw.style`w-full h-6 flex items-center justify-center bg-slate-300 rounded-t`}>
                    <Text>Add New Scheme</Text>
                </View>
            </View>
        </Modal>
    )
}