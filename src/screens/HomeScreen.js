import React, {useState, useEffect} from 'react';
import { 
    View,
    Text,
    Image, } from 'react-native'
import { CommonStyle } from '../styles/CommonStyle';
import { WebView } from 'react-native-webview';
export const HomeScreen = () => {
    
    return(
        <View>
            <WebView
                style={{ width: 204, height: 204 }}
                source={{html: '<h1>Hello javaTpoint</h1>'}}
            />
            <Text >  
                HOME SCREEN
            </Text>
            <Image
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
                source={require('../../resources/images/image_header.jpg')}
              /> 
        </View>
    )
}