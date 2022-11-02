import React from 'react';
import { Text, View } from "react-native";
import { CommonClasses } from "../styles/CommonClasses";
import NotificationsIcon from "../assets/icons/header/NotificationsIcon";

const Header = () => {
    return (
        <View style={CommonClasses.header}>
            <View style={CommonClasses.icon}>
                <View>
                    <Text style={CommonClasses.iconText}>
                        AN
                    </Text>
                </View>
            </View>
            <NotificationsIcon/>
        </View>
    );
};

export default Header;
