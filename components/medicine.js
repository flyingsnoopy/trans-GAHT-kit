import tw from "twrnc";
import { View,Image } from "react-native";

export function MedicineImage({Name}){
    var display
    switch (Name){
        case "progynova-cn":
            display = <Image style={tw.style`h-26 w-26 m-2`} source={require("../assets/image/progynova-cn.png")}/>;break
        case "progynova-th":
            display = <Image style={tw.style`h-26 w-36 m-2`} source={require("../assets/image/progynova-th.png")}/>;break
        case "progynova-de":
            display = <Image style={tw.style`h-26 w-36 m-2`} source={require("../assets/image/progynova-de.png")}/>;break
    }
    return display
}