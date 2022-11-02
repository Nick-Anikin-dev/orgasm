import React, { FC } from 'react';
import { ScrollView, Text, View } from "react-native";
import { HomeClasses } from "../styles/HomeClasses";
import { CommonClasses } from "../styles/CommonClasses";
import EducationShelf from "../components/EducationShelf";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Header from "../components/Header";

interface HomeProps {
    navigation: BottomTabNavigationProp<any>
}

const Home: FC<HomeProps> = ({navigation}) => {
    return (
        <ScrollView style={CommonClasses.container}>
            <Header/>
            <View>
                <Text style={HomeClasses.welcome}>
                    Hello, {'\n'}Anna Demidenko
                </Text>
            </View>
            <EducationShelf navigation={navigation}/>
        </ScrollView>
    );
};

export default Home;
