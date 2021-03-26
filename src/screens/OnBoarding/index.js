import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Animated, Image,  } from 'react-native';
import styles from "./styles"
import CustomButton from "../../components/CustomButton/index"
import { images, theme } from "../../constants/index"
const { COLORS, SIZES } = theme;
const { onBoarding1, onBoarding2, onBoarding3 } = images
const BoardingData = [
    {
        title: "First",
        description: "uieg3uighuihgu ufh3ufh3h3 fg3fg3f3gh cg3fg3 fg3fg3fg3vgv3ugvu",
        img: onBoarding1
    },
    {
        title: "Second",
        description: "uieg3uighuihgu ufh3ufh3h3 fg3fg3f3gh cg3fg3 fg3fg3fg3vgv3ugvu",
        img: onBoarding2
    },
    {
        title: "Third",
        description: "uieg3uighuihgu ufh3ufh3h3 fg3fg3f3gh cg3fg3 fg3fg3fg3vgv3ugvu",
        img: onBoarding3
    }
]

const OnBoarding = ({ navigation }) => {
    const [atEnd, setEnd] = useState(false)

    const scrollX = new Animated.Value(0)

    useEffect(() => {
   
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === BoardingData.length - 2) {
                return (
                    setEnd(true)
                )
            }

        })
        return () => scrollX.removeListener()

    }, [])

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },

                ], { useNativeDriver: false })}
            >

                {BoardingData.map((item, index) => {
                
                    return (

                        <View key={index} style={styles.renderView}>



                            <View style={styles.imgView}>
                                <Image
                                    source={item.img}
                                    resizeMode="center"
                                    style={styles.img}
                                />
                            </View>
                            <View style={styles.content}>
                                <Text style={[styles.text, { fontSize: 25, color: COLORS.gray }]}>{item.title}</Text>
                                <Text style={styles.text}>{item.description}</Text>
                            </View>


                        </View>
                    )
                })}
            </Animated.ScrollView>
        )
    }

    function renderDots() {
        const position = Animated.divide(scrollX, SIZES.width)
        return (
            <View style={styles.dotContainer}>
                {BoardingData.map((_, i) => {
                    const opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"

                    })
                    return (
                        <Animated.View
                            key={i}
                            style={{ opacity, height: 10, width: 10, backgroundColor: "blue", borderRadius: 5, margin: 10 }}
                        />



                    )
                })}
            </View>


        )

    }

    function footer() {
        return (
            <View style={{ flexDirection:"row",justifyContent:"space-between" }}>
            {  atEnd? 
            
            <CustomButton
                title="NEXT"
                onPress={() =>navigation.replace("First")}
                container={{ height: 100, width: 100, justifyContent: "center", backgroundColor: COLORS.blue, borderTopRightRadius: 50, borderBottomRightRadius: 50,alignItems: 'center',}}
            
                text={{ color: "white", fontWeight: "bold",fontSize:20 }}
            
                />:<CustomButton
                title="SKIP"
                onPress={() => navigation.replace("First")}
                container={{ height: 100, width: 100, justifyContent: "center", backgroundColor: COLORS.black,borderTopRightRadius: 50, borderBottomRightRadius: 50 ,alignItems: 'center',}}
       
                text={{ color: "white", fontWeight: "bold",fontSize:20 }}

            />
            }
               
            </View>

        )
    }

    return (
        <SafeAreaView style={styles.container}>

            {renderContent()}
            {renderDots()}
            {footer()}

        </SafeAreaView>
    )
}

export default OnBoarding
