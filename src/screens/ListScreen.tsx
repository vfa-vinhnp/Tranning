import React, {useState, useEffect} from 'react';
import { 
    View,
    Text,
    FlatList,
    Button,
    ScrollView, 
} from 'react-native'
import { CommonStyle } from '../styles/CommonStyle';
import { WebView } from 'react-native-webview';
import CheckBox from '@react-native-community/checkbox';

export const ListScreen = ({navigation}) => {

    const [hasScrolled, setHasScrolled] = useState(0);
    const [isCheckOn, setIsCheckOn ] = useState();
    const [listData, setListData] = useState([{
        title : 'title_1',
        description : 'description_1',
    }]);
    
    const data = [
        {
            title : 'title_1',
            description : 'description_1',
        }
    ]
    
    const onExportClicked = () => {
        navigation.navigate('DetailScreen',{})
    }
    
    const setSelection = () =>{
    
    }
    
    const onItemClicked = ( data : any)  => {
        navigation.navigate('DetailScreen',{ data : data})
        // navigation.navigate('DetailScreen',{
        //     title: data.title,
        //     description: data.description
        // })
    }

    useEffect(() => {
        setHasScrolled(false)
        for(let i = 0; i < 9; i++){
            data.push({
                title : 'title_'+data.length,
                description : 'description_'+data.length,
            })
        }
        setListData(data)
    },[])

    const handleLoadMore = () => {
        
        data.push({
            title : 'title_'+data.length,
            description : 'description_'+data.length,
        })
        setListData(data)
      }

    return(
        <View>
            <ScrollView>
            <FlatList
            style={{ width: '100%' }}  
            ListHeaderComponent={() => (
                <View>
                    <Button
                        onPress={onExportClicked}
                        title="export"
                        color="#841584"/> 
                        <Text >  
                            CHECK ON :
                        </Text>
                        <CheckBox
                            value={isCheckOn}
                            onValueChange={setIsCheckOn}/>
                </View>
            )}
            data={listData}
            renderItem={({ item }) => (
                <View>
                    <Text >  
                        title : {item.title}
                    </Text>
                    <CheckBox
                        value={isCheckOn}
                        onValueChange={setSelection}/>
                    <Button
                        style={[CommonStyle.buttonStyle, CommonStyle.colorRed]}
                        onPress={() => onItemClicked(item.title)}
                        title="button item"
                        />
                </View>
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold ={0.5}
        />
            </ScrollView>
        </View>
    )
}