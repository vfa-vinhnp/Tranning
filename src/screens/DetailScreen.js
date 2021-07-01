import React, {useState, useEffect} from 'react';
import { 
    View,
    Text,
    Button,
    Image, } from 'react-native'
import { CommonStyle } from '../styles/CommonStyle';
import { WebView } from 'react-native-webview';
export const DetailScreen = ({route, navigation}) => {
    
    useEffect(() => {
        
    },[])

    const { data } = route.params;

    const onDeleteClicked = () =>{
        navigation.goBack()
    }

    return(
        <View>
            <Text >  
                valuse : {data}
            </Text>
            <Button
                style={CommonStyle.buttonExportStyle}
                title="button export"
                />
            <Button
                style={CommonStyle.buttonStyle}
                onPress={() => onDeleteClicked()}
                title="button delete"
                />
        </View>
    )
}