import TabBar from "./TabBar";
import { BottomScreens } from "../setup/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={TabBar}>
            {BottomScreens.map(screen => <Tab.Screen
                options={screen.options}
                name={screen.name}
                key={screen.name}
                component={screen.component}/>)}
        </Tab.Navigator>
    )
}

export default TabNavigator;
