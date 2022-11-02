import { StyleSheet } from "react-native";

export const TabBarClasses = StyleSheet.create({
    container: {
       backgroundColor: '#181A20',
    },
    tabBar: {
        backgroundColor: '#101114',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent:"center",
        height: 90,
        flexDirection:"row"
    },
    touchableItem: {
        flex: 1,
        justifyContent:"center",
        alignItems:'center'
    }
})
