import React, { FC, ReactChildren } from 'react';
import { ScrollView, Text, View } from "react-native";
import { CardClasses } from "../styles/CardClasses";
import EducationMarker from "./EducationMarker";
import { EducationPartClasses } from "../styles/EducationPartClasses";

interface EducationPartProps {
    accentColor: string
    title: string
    description: string
    children: React.ReactNode
}

const EducationPart: FC<EducationPartProps> = ({accentColor, title, description, children}) => {
    return (
        <>
            <View style={CardClasses.info}>
                <EducationMarker accentColor={accentColor}/>
                <View>
                    <Text style={CardClasses.title}>{title}</Text>
                    <Text style={CardClasses.description}>{description}</Text>
                </View>
            </View>
            <ScrollView style={EducationPartClasses.scrollView}>
                {children}
            </ScrollView>
        </>
    );
};

export default EducationPart;
