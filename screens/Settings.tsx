import React from 'react';
import { View } from "react-native";
import { CommonClasses } from "../styles/CommonClasses";
import Header from "../components/Header";
import SettingsItem from "../components/SettingsItem";
import { SettingsClasses } from "../styles/SettingsClasses";
import NotificationsIcon from "../assets/icons/header/NotificationsIcon";
import AccountIcon from "../assets/icons/AccountIcon";
import RateAppIcon from "../assets/icons/RateAppIcon";
import ShareAppIcon from "../assets/icons/ShareAppIcon";

const Settings = () => {
    return (
        <View style={CommonClasses.container}>
            <Header/>
            <View style={SettingsClasses.wrapper}>
                <SettingsItem icon={<NotificationsIcon/>} title="Настройки уведомлений"/>
                <SettingsItem icon={<AccountIcon/>} title="Настройки аккаунта"/>
                <SettingsItem icon={<RateAppIcon/>} title="Оценить приложение"/>
                <SettingsItem icon={<ShareAppIcon/>} title="Поделиться"/>
            </View>
        </View>
    );
};

export default Settings;
