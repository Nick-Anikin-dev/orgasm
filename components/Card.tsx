import React, { FC } from 'react';
import { Text, View } from "react-native";
import { CardClasses } from "../styles/CardClasses";
import EducationMarker from "./EducationMarker";

interface CardProps {
    title: string
    description: string
    accentColor: string
    percentage: number
}

const Card: FC<CardProps> = ({title, description, accentColor, percentage}) => {
    return (
        <View style={CardClasses.container}>
            <View style={CardClasses.info}>
                <EducationMarker accentColor={accentColor}/>
                <View>
                    <Text style={CardClasses.title}>{title}</Text>
                    <Text style={CardClasses.description}>{description}</Text>
                </View>
                <View style={{...CardClasses.percentageContainer, backgroundColor: accentColor}}>
                    <Text style={CardClasses.percentage}>{percentage}%</Text>
                </View>
            </View>
            <View style={{...CardClasses.line, backgroundColor: accentColor}}/>
        </View>
    );
};

export default Card;
