import React, { FC } from 'react';
import { BottomScreenName } from "../setup/screens";
import { DashboardIcon } from "../assets/icons/navigation/DashboardIcon";
import { TechniquesIcon } from "../assets/icons/navigation/TechniquesIcon";
import { SettingsIcon } from "../assets/icons/navigation/SettingsIcon";
import { TrackingIcon } from "../assets/icons/navigation/TrackingIcon";
import { HomeIcon } from "../assets/icons/navigation/HomeIcon";

interface BottomScreenIconProps {
    name: BottomScreenName
    isActive: boolean
}

const BottomScreenIcon: FC<BottomScreenIconProps> = ({name, isActive}) => {
    switch (name) {
        case BottomScreenName.TRACKING:
            return <TrackingIcon isActive={isActive}/>
        case BottomScreenName.DASHBOARD:
            return <DashboardIcon isActive={isActive}/>
        case BottomScreenName.TECHNIQUES:
            return <TechniquesIcon isActive={isActive}/>
        case BottomScreenName.SETTINGS:
            return <SettingsIcon isActive={isActive}/>
        case BottomScreenName.HOME:
            return <HomeIcon isActive={isActive}/>
    }
    return null
};

export default BottomScreenIcon;
