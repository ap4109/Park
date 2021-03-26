import {Dimensions} from "react-native";
const  {width,height} = Dimensions.get("window")
export const COLORS={
    black:"#1E1F20",
    white:"#FFFFFF",
    gray:"#6A6A6A",
    blue:"#3366CC"
}
export const SIZES ={
    width,
    height
}
const appTheme ={COLORS,SIZES}
export default appTheme