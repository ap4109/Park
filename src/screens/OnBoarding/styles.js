import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants/index"
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    img: {
        width: SIZES.width,
        height: SIZES.height
    },
    renderView: {
        width: SIZES.width,
    },
    imgView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        position: "absolute",
        bottom: "10%"
    },
    text: {
        textAlign: 'center'
    },
    dots: {
        borderRadius: 10,
        backgroundColor: COLORS.blue,
        marginHorizontal: 5
    },
    dotContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dotRoot: {
        position: "absolute",
        bottom: SIZES.height > 700 ? "25%" : "16%"
    },
    tap: {
     height:"100%",
     
        alignItems: 'center',
        justifyContent: 'center',
    
    }
})
export default styles