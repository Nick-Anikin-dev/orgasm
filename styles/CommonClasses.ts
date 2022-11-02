import { StyleSheet } from "react-native";

export const CommonClasses = StyleSheet.create({
    container: {
        paddingHorizontal: '5%'
    },
    header: {
        marginTop: 50,
        justifyContent: "space-between",
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#31417c"
    },
    iconText: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold"
    },

})
