import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from "./styles"
const CustomButton = (props) => {
    return (
        <View style={[styles.container],{...props.container}}>
            <Pressable
                style={[styles.touch],{...props.touch}}
                onPress={props.onPress}
            >
                <Text style={[styles.text,{...props.text}]}>{props.title}</Text>
            </Pressable>
        </View>
    );
}
export default CustomButton
