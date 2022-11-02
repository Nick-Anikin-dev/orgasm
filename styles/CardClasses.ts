import { StyleSheet } from "react-native";

export const CardClasses = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#1F222A",
        borderRadius: 12,
        marginBottom: 10
    },
    info: {
        marginBottom: 22,
        flexDirection: "row",
    },
    marker: {
      width: 40,
      height: 40,
      marginRight: 16,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ffffff',
        fontFamily: "Inter_600SemiBold",
        marginBottom: 2,
    },
    description: {
        fontSize: 12,
        lineHeight: 16,
        color: '#5E6272',
        fontFamily: " Inter_500Medium"
    },
    percentageContainer: {
        marginLeft: 'auto',
        paddingHorizontal: 15,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    percentage: {
        color: "#ffffff",
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Inter_600SemiBold'
    },
    line: {
        height: 4,
        backgroundColor: '#E34299',
        borderRadius: 10
    }
})
