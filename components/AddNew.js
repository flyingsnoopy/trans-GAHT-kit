import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, View, Text, Pressable, TextInput } from "react-native";
import { medicine } from "../assets/data.json";
import tw from "twrnc"

const modalStyle = tw.style`w-full h-3/4 rounded-t absolute bottom-0 bg-white flex flex-col justify-start`

function Title({ TitleText }) {
    return (
        <View style={tw.style`w-full h-6 flex items-center justify-center bg-slate-300 rounded-t`}>
            <Text>{TitleText}</Text>
        </View>
    )
}

export function AddNewSchemeModal({ isVisble, Close }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisble}>
            <Pressable style={tw.style`w-full h-1/4 absolute top-0`} onPress={Close} />
            <View style={modalStyle}>
                <Title TitleText={"Add New Scheme"} />
            </View>
        </Modal>
    )
}

export function AddNewMedicineModal({ isVisble, Close }) {
    const [content, setContent] = useState(<ChoosePage />)
    const [medicineIndex, setMedicineIndex] = useState()
    return (
        <Modal animationType="slide" transparent={true} visible={isVisble}>
            <Pressable style={tw.style`w-full h-1/4 absolute top-0`} onPress={Close} />
            <View style={modalStyle}>
                <Title TitleText={"Add New Medicine"} />
                {content}
            </View>
        </Modal>
    )
}

function ChoosePage({ GetMedicineChosen }) {
    const [searchInput, setSearchInput] = useState("")
    const [medicineList, setMedicineList] = useState([])
    function search(text) {
        for (const i in medicine) {
            
        }
        setSearchInput(text)
    }
    return (
        <View style={tw.style`my-2 flex flex-col items-center`}>
            <View style={tw.style`w-4/5 flex flex-row justify-center gap-2 h-10`}>
                <TextInput
                    style={tw.style`border rounded-sm h-8 w-3/5 p-2 border-gray-300 text-gray-500`}
                    value={searchInput}
                    onChange={e => search(e.target.value)}
                />
                <Pressable style={tw.style`border rounded h-8 flex items-center justify-center p-1`}>
                    <Text>Accept</Text>
                </Pressable>
            </View>
            <View style={tw.style`flex w-full items-center`}>

            </View>
        </View>

    )
}

function UnitMedicine({ Key, Content, ChooseFunc }) {
    const [chosen, setChosen] = useState(false)
    return (
        <Pressable style={tw.style`flex flex-row w-full border rounded-md`}>
            <Image style={tw.style`h-26 w-26 m-2`} source={"./assets/image/"+Key+".jpg"} />
            <View style={tw.style`h-full flex flex-col items-start gap-1 m-2`}>
                <Text>{Content.EnglishTradeName}</Text>
                <Text>{Content.EnglishGenericName}</Text>
                <Text>{Content.Dosage}</Text>
            </View>
        </Pressable>
    )
}
