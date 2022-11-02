import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { EducationShelfClasses } from "../styles/EducationShelfClasses";
import Card from "./Card";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomScreenName, StackScreenName } from "../setup/screens";

interface EducationShelfProps {
    navigation: BottomTabNavigationProp<any>
}

const EducationShelf: FC<EducationShelfProps> = ({navigation}) => {
    return (
        <View style={EducationShelfClasses.container}>
            <Text style={EducationShelfClasses.label}>СПИСОК УРОКОВ</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate(BottomScreenName.TYPES_OF_ORGASM)}
            >
                <Card title='Виды оргазма' description='Рабочие виды стимуляции' accentColor='#A06AF9' percentage={25}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(BottomScreenName.LACK_OF_SENSITIVITY)}
            >
                <Card title='Отсутствие оргазма' description='Его причины и разбор потери' accentColor='#E34299'
                      percentage={20}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(BottomScreenName.EROGENOUS_ZONES)}
            >
                <Card title='Эрогенные зоны' description='Для достижения оргазма' accentColor='#F49E72'
                      percentage={50}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(BottomScreenName.WAY_TO_ORGASM)}
            >
                <Card title='Путь к оргазму' description='Идеальная прелюдия!' accentColor='#87DAA8' percentage={32}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(BottomScreenName.USEFUL_FEATURES)}
            >
                <Card title='Полезные фишки' description='Лайфхаки для достидения' accentColor='#F06B87'
                      percentage={45}/>
            </TouchableOpacity>
        </View>
    );
};

export default EducationShelf;
