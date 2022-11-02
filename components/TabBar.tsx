import { TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { TabBarClasses } from "../styles/TabBarClasses";
import BottomScreenIcon from "./BottomScreenIcon";
import { BottomNavigatorScreens, BottomScreenName } from "../setup/screens";

const TabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
    return (
        <View style={TabBarClasses.container}>
            <View style={TabBarClasses.tabBar}>
                {state.routes
                    .filter(route=> BottomNavigatorScreens
                    .some(screen=>screen.name === route.name))
                    .map((route, index) => {
                    const {options} = descriptors[route.key];
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({params: {}, name: route.name, merge: true});
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? {selected: true} : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={TabBarClasses.touchableItem}
                        >
                            <BottomScreenIcon name={route.name as BottomScreenName} isActive={isFocused}/>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
export default TabBar
