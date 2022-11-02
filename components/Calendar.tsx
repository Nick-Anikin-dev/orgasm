import { Image, Text, View } from "react-native";
import React from 'react';
import { CalendarClasses } from "../styles/CalendarClasses";

const Calendar = () => {
    return (
        <View style={CalendarClasses.container}>
            <View style={CalendarClasses.header}>
                <View style={CalendarClasses.monthTitle}>
                    <Text style={CalendarClasses.label}>Октябрь</Text>
                    <Image style={{height: 14, width: 8}} source={require("../assets/icons/calendar/next-icon.png")}/>
                </View>
                <View style={CalendarClasses.fullMonthControl}>
                    <Image style={{height: 20, marginRight: 28, width: 12}}
                           source={require("../assets/icons/calendar/prev-icon.png")}/>
                    <Image style={{height: 20, width: 12}} source={require("../assets/icons/calendar/next-icon.png")}/>
                </View>
            </View>
            <View style={CalendarClasses.daysOfWeekWrapper}>
                <View>
                    <Text  style={CalendarClasses.dayOfWeek}>ПН</Text>
                </View>
                <View>
                    <Text  style={CalendarClasses.dayOfWeek}>ВТ</Text>
                </View>
                <View>
                    <Text  style={CalendarClasses.dayOfWeek}>СР</Text>
                </View>
                <View>
                    <Text  style={CalendarClasses.dayOfWeek}>ЧТ</Text>
                </View>
                <View>
                    <Text  style={CalendarClasses.dayOfWeek}>ПТ</Text>
                </View>
                <View>
                    <Text  style={CalendarClasses.dayOfWeek}>СБ</Text>
                </View>
                <View>
                    <Text style={CalendarClasses.dayOfWeek}>ВС</Text>
                </View>
            </View>
            <View style={CalendarClasses.days}>
                <View style={{...CalendarClasses.week, marginTop: 10}}>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}></Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}></Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}></Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>1</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>2</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>3</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>4</Text></View>
                </View>
                <View style={CalendarClasses.week}>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>5</Text></View>
                    <View style={{...CalendarClasses.day, ...CalendarClasses.active}}><Text style={CalendarClasses.numberOfDay}>6</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>7</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>8</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>9</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>10</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>11</Text></View>
                </View>
                <View style={CalendarClasses.week}>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>12</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>13</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>14</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>15</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>16</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>17</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>18</Text></View>
                </View>
                <View style={CalendarClasses.week}>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>19</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>20</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>21</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>22</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>23</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>24</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>25</Text></View>
                </View>
                <View style={CalendarClasses.week}>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>26</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>27</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>28</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>29</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>30</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}>31</Text></View>
                    <View style={CalendarClasses.day}><Text style={CalendarClasses.numberOfDay}></Text></View>
                </View>
            </View>
        </View>
    );
};

export default Calendar;
