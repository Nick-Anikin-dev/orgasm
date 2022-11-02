import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { StackScreens } from "../setup/screens";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#181A20',
    }
}

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer theme={Theme}>
        <Stack.Navigator>
            {
                StackScreens.map(screen =>
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                )
            }
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
