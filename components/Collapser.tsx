import React, { FC, ReactNode } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { CollapserClasses } from "../styles/CollapserClasses";

interface CollapserProps {
    title: string
    shortDescription?: string
    callback?: () => void
    children: ReactNode
    isOpen: boolean
}

const Collapser: FC<CollapserProps> = ({title, shortDescription, isOpen, children, callback}) => {
    return (
        <TouchableOpacity onPress={callback} style={CollapserClasses.container}>
            <View style={CollapserClasses.header}>
                <View>
                    <Text style={CollapserClasses.title}>{title}</Text>
                    {shortDescription && <Text style={CollapserClasses.shortDescription}>{shortDescription}</Text>}
                </View>
                <View style={CollapserClasses.icon}>

                </View>
            </View>
            {
                isOpen && <View style={CollapserClasses.content}>
                    {children}
                </View>
            }
        </TouchableOpacity>
    );
};

export default Collapser;
