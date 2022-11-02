import { StyleSheet } from "react-native";

export const CollapserClasses = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#262A34",
        marginBottom: 10,
        borderRadius: 16
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: "#ffffff",
        fontSize: 16
    },
    shortDescription: {
        color: "#5E6272",
        fontSize: 12,
    },
    icon: {
        width: 9,
        height: 9,
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderColor: "#ffffff",
        transform: [{rotate: '-45deg'}]
    },
    content: {}
})
