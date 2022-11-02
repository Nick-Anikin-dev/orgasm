import React from 'react';
import { Text, View } from "react-native";
import { CommonClasses } from "../styles/CommonClasses";
import Header from "../components/Header";
import { CardClasses } from "../styles/CardClasses";
import EducationMarker from "../components/EducationMarker";
import Calendar from "../components/Calendar";
import Collapser from "../components/Collapser";
import { TrackingClasses } from "../styles/TrackingClasses";


const Tracking = () => {
    return (
        <View style={CommonClasses.container}>
            <Header/>
            <View style={CardClasses.info}>
                <EducationMarker accentColor="#A06AF9"/>
                <View style={{justifyContent: "center"}}>
                    <Text style={CardClasses.title}>Отслеживание техник</Text>
                </View>
            </View>
            <Calendar/>
            <Text style={TrackingClasses.label}>ИСПОЛЬЗОВАННАЯ ТЕХНИКА</Text>
            <Collapser title="Название техники" isOpen={false}>

            </Collapser>
            <Text style={TrackingClasses.label}>ВРЕМЯ</Text>
            <Collapser title="Время достижения результа" isOpen={false}>

            </Collapser>
            <Text style={TrackingClasses.label}>ОЦЕНКА РЕЗУЛЬТАТА</Text>
        </View>
    );
};

export default Tracking;
