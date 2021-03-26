import { Dimensions, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window')

// for width

const widthToDp = number => {
    let givenWidth = typeof number === "number" ? number : parseFloat(number)
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100)
}

// for height

const heightToDp = number => {
    let givenHeight = typeof number === "number" ? number : parseFloat(number)
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100)
}

// for orientation

const listenForChange = ref => {
    Dimensions.addEventListener(
        'change',
         newDimensions => {
            width= newDimensions.screen.width;
            height= newDimensions.screen.height;
        })
    ref.setState(state = {
        orientation: height > width ? "portrait" : "landscape"
    })
}

const removeForChange = () => {
    Dimensions.removeEventListener('change')
}

export { widthToDp, heightToDp, listenForChange, removeForChange }