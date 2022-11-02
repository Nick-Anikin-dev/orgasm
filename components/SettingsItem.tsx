import React, { FC } from 'react';
import { SettingsItemClasses } from "../styles/SettingsItemClasses";
import { Text, TouchableOpacity, View } from "react-native";

interface SettingsItemProps {
    title: string
    icon: JSX.Element
    isOpen?: boolean
    children?: React.ReactElement
    callback?: () => void
}

const SettingsItem: FC<SettingsItemProps> = ({title, icon, children, callback, isOpen}) => {
    return (
        <TouchableOpacity onPress={callback} style={SettingsItemClasses.container}>
            <View style={SettingsItemClasses.header}>
                <View>
                    <Text style={SettingsItemClasses.title}>{title}</Text>
                </View>
                <View>
                    {icon}
                </View>
            </View>
            {(isOpen && children) && children}
        </TouchableOpacity>
    );
};

export default SettingsItem;
