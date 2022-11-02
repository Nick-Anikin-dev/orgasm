import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackScreenName } from "../setup/screens";

interface StartProps {
    navigation: NativeStackNavigationProp<any>
}

const Start: FC<StartProps> = ({navigation}) => {
    return (
        <View style={{height: '100%',alignItems: "center", justifyContent: "center"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate(StackScreenName.PREVIEW)}}>
                <Text style={{color:'#fff',  fontSize: 20}}>Start screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Start;
// const Preview: FC<PreviewProps> = ({navigation}) => {
//     return (
//         <View style={{height: '100%',alignItems: "center", justifyContent: "center"}}>
//             <TouchableOpacity onPress={()=>{navigation.navigate(StackScreenName.HOME_ROOT)}}>
//                 <Text style={{color:'#fff',  fontSize: 20}}>Preview screen</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
