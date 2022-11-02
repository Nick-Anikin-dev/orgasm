import { Dimensions, StyleSheet } from "react-native";

export const CalendarClasses = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#262A34',
        height: 320,
        padding: 16,
        marginBottom: 14
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        color: "#ffffff",
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        marginRight: 14
    },
    monthTitle: {
        flexDirection: "row",
        alignItems: "center"
    },
    fullMonthControl: {
        flexDirection: "row",
        alignItems: "center"
    },
    daysOfWeekWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },
    dayOfWeek: {
        fontSize: 14,
        textAlign:"center",
        width: 40
    },

    days: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    week: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    day: {
        width: 40,
        height: 40,
        alignItems:"center",
        justifyContent:"center"
    },
    active: {
        backgroundColor:"#C25FFF",
        borderRadius: 100,
    },
    numberOfDay: {
        color:"#ffffff",
        fontSize: 20,
        textAlign:"center",
    }
})
