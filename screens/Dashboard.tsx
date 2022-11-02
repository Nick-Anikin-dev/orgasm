import React from 'react';
import { Dimensions, Text, View } from "react-native";
import { CommonClasses } from "../styles/CommonClasses";
import Header from "../components/Header";
import { LineChart } from "react-native-chart-kit";
import { DashboardClasses } from "../styles/DashboardClasses";

const screenWidth = Dimensions.get('window').width * 0.9
const Dashboard = () => {
    const data = {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        datasets: [ {
            data: [ 20, 45, 28, 80, 99, 43, 20, 10, 90, 20, 89, 20 ]
        } ]
    }
    const chartConfig = {
        backgroundGradientFrom: 'rgba(38, 42, 52, 1)',
        backgroundGradientTo: 'rgba(38, 42, 52, 1)',
        propsForLabels: {
            fontSize: 12,
            color: '#fff',
            paddingLeft: 4
        },
        propsForDots: {
            r: 4,
            strokeWidth: 2,
            stroke: '#fff'
        },
        color: (opacity = 1) => `rgba(109, 95, 253, 1)`,
        decimalPlaces: 0,
    }
    return (
        <View style={CommonClasses.container}>
            <Header/>
            <Text style={DashboardClasses.label}>ГРАФИК ЧУВСТВИТЕЛЬНОСТИ</Text>
            <LineChart
                withVerticalLines={false}
                withInnerLines={true}
                withDots={true}
                yLabelsOffset={5}
                style={{borderRadius: 12, marginTop: -8, paddingTop: 16, paddingRight: 24}}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
            />
            <View style={DashboardClasses.top}>
                <Text style={{...DashboardClasses.label, marginBottom: 14}}>ЛЮБИМЫЕ ТЕХНИКИ</Text>
                <View style={DashboardClasses.technique}>
                    <Text style={DashboardClasses.place}>1</Text>
                    <Text style={DashboardClasses.techName}>Название техники</Text>
                </View>
                <View style={DashboardClasses.technique}>
                    <Text style={DashboardClasses.place}>2</Text>
                    <Text style={DashboardClasses.techName}>Название техники</Text>
                </View>
                <View style={DashboardClasses.technique}>
                    <Text style={DashboardClasses.place}>3</Text>
                    <Text style={DashboardClasses.techName}>Название техники</Text>
                </View>
                <View style={DashboardClasses.technique}>
                    <Text style={DashboardClasses.place}>4</Text>
                    <Text style={DashboardClasses.techName}>Название техники</Text>
                </View>
                <View style={DashboardClasses.technique}>
                    <Text style={DashboardClasses.place}>5</Text>
                    <Text style={DashboardClasses.techName}>Название техники</Text>
                </View>
            </View>

        </View>
    );
};

export default Dashboard;
