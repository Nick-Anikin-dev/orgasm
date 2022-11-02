import { StyleSheet } from "react-native";

export const SettingsItemClasses = StyleSheet.create({
    container: {
        backgroundColor: '#262A34',
        borderRadius: 16,
        marginBottom: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 14,
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        color: "#ffffff",
        lineHeight: 24,
        fontFamily: "Inter_600SemiBold"
    }
})
