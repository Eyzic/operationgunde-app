import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  Platform,
  Dimensions,
  PixelRatio,
  StyleSheet,
} from "react-native";
import StatsDisplay from "./statsDisplay";
import { Calendar, CalendarList } from "react-native-calendars";
import StatItem from "./statItem";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const historyOver = (props) => {
  const [value, onChangeText] = React.useState("Default Placeholder");

  return (
    <View style={[styles.mainsquare]}>
      <View style={[styles.calendarholder]}>
        <CalendarList
          horizontal={true}
          pagingEnabled={true}
          firstDay={1}
          style={{
            width: SCREEN_WIDTH * 0.9
          }}
          theme={{
            calendarBackground: "transparent",
            dayTextColor: "white",
            monthTextColor: "white",
            textSectionTitleColor: "white",
            textDisabledColor: "hsla(0, 0%, 100%, 0.4)",
            todayTextColor: "hsla(324, 53%, 50%,1)",
            arrowColor: "white",
            textMonthFontWeight: "bold",
            textMonthFontSize: normalize(17),
            //backgroundColor: 'black',
            //textSectionTitleDisabledColor: '#d9e1e8',
            //selectedDayBackgroundColor: '#00adf5',
            //selectedDayTextColor: '#ffffff',
            //dayTextColor: '#2d4150',
            //dotColor: '#00adf5',
            //selectedDotColor: '#ffffff',
            //disabledArrowColor: '#d9e1e8',
            //monthTextColor: 'blue',
            //indicatorColor: 'blue',
            //textDayFontFamily: 'monospace',
            //textMonthFontFamily: 'monospace',
            //textDayHeaderFontFamily: 'monospace',
            //textDayFontWeight: '300',
            //textDayHeaderFontWeight: '300',
            //textDayFontSize: 16,
            //textDayHeaderFontSize: 16
          }}
          markedDates={{
            "2021-04-28": {
              customStyles: {
                container: {
                  backgroundColor: "#D67AB1",
                  dotColor: "#01A195",
                },
                text: {
                  color: "white",
                },
              },
            },

            "2021-04-27": { marked: true, dotColor: "white" },
            "2021-04-28": { marked: true, dotColor: "white" },

            "2021-04-18": {
              color: "#01A195",
              textColor: "white",
              //marked: true,
              //dotColor: "white",
            },
            "2021-04-20": {
              color: "#01A195",
              textColor: "white",
              marked: true,
              dotColor: "white",
            },

            "2021-04-21": {
              color: "#8693AB",
              textColor: "white",
              //marked: true,
              //dotColor: "white",
            },
          }}
          markingType={"period"}
        />
      </View>
      <View style={[styles.statistics]}>
        <View style={[styles.statsTitle]}>
          <Text
            style={{
              fontSize: normalize(17),
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"Månadsstatistik"}
          </Text>
        </View>

        <View style={[styles.stats]}>
          <StatItem color="white" stat="Antal Pass" value="76"></StatItem>
          <StatItem color="white" stat="Antal Timmar" value="196"></StatItem>
          <StatItem color="transparent" stat="Mål" value="4/5"></StatItem>
        </View>
      </View>
    </View>
  );
};

export default historyOver;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "hsla(268, 67%, 89%,1)",
  },

  stats: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    bottom: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  statsTitle: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: normalize(5),
  },
  statistics: {
    height: "30%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    top: normalize(15),
    marginBottom: normalize(30),
  },

  calendarholder: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: normalize(20),
  },

  mainsquare: {
    backgroundColor: "hsla(268, 58%, 80%,1)",
    height: "65%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: normalize(13),
    borderTopLeftRadius: normalize(13),
  },
});
