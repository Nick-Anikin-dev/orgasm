import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";
import Techniques from "../screens/Techniques";
import { ComponentType, FC } from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import ErogenousZones from "../screens/ErogenousZones";
import LackOfSensitivity from "../screens/LackOfSensitivity";
import TypesOfOrgasm from "../screens/TypesOfOrgasm";
import UsefulFeatures from "../screens/UsefulFeatures";
import WayToOrgasm from "../screens/WayToOrgasm";
import Tracking from "../screens/Tracking";
import Start from "../screens/Start";
import Preview from "../screens/Preview";
import TabNavigator from "../components/TabNavigator";

const baseScreenOptions = {
    headerShown: false,
}

interface BottomScreen {
    name: string
    component: ComponentType | FC<any>
    options: BottomTabNavigationOptions
}

interface StackScreen {
    name: string
    component: ComponentType | FC<any>
    options: NativeStackNavigatorProps
}

export enum BottomScreenName {
    HOME = "Home",
    DASHBOARD = "Dashboard",
    TECHNIQUES = "Techniques",
    TRACKING = "Tracking",
    SETTINGS = "Settings",
    EROGENOUS_ZONES = "ErogenousZones",
    LACK_OF_SENSITIVITY = "LackOfSensitivity",
    TYPES_OF_ORGASM = "TypesOfOrgasm",
    USEFUL_FEATURES = "UsefulFeatures",
    WAY_TO_ORGASM = "WayToOrgasm"
}

export enum StackScreenName {
    START = "Start",
    PREVIEW = "Preview",
    HOME_ROOT = "HomeRoot",

}

export const BottomNavigatorScreens: Array<BottomScreen> = [
    {
        name: BottomScreenName.HOME,
        component: Home,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.TECHNIQUES,
        component: Techniques,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.TRACKING,
        component: Tracking,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.DASHBOARD,
        component: Dashboard,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.SETTINGS,
        component: Settings,
        options: {...baseScreenOptions}
    }
]

export const BottomScreens: Array<BottomScreen> = [
    ...BottomNavigatorScreens,
    {
        name: BottomScreenName.EROGENOUS_ZONES,
        component: ErogenousZones,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.LACK_OF_SENSITIVITY,
        component: LackOfSensitivity,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.TYPES_OF_ORGASM,
        component: TypesOfOrgasm,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.USEFUL_FEATURES,
        component: UsefulFeatures,
        options: {...baseScreenOptions}
    },
    {
        name: BottomScreenName.WAY_TO_ORGASM,
        component: WayToOrgasm,
        options: {...baseScreenOptions}
    }
]

export const StackScreens: Array<StackScreen> = [
    {
        name: StackScreenName.START,
        component: Start,
        options: {...baseScreenOptions}
    },
    {
        name: StackScreenName.PREVIEW,
        component: Preview,
        options: {...baseScreenOptions}
    },
    {
        name: StackScreenName.HOME_ROOT,
        component: TabNavigator,
        options: {...baseScreenOptions}
    }
]
