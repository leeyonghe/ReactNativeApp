import React from 'react';
import {
    ActivityIndicator, 
    View,
    Text
  } from 'react-native';

export default function LoadingView(props) {

    setTimeout(() => {
        props['func']();
    }, 3000);

    return (<React.Fragment>
        <View style={{width:'100%', height:'100%', justifyContent:"center"}}>
            <Text style={{alignSelf:"center"}}>Loading ...</Text>
            <ActivityIndicator 
            style={{alignSelf:"center"}}/>
        </View>
    </React.Fragment>);
    
}