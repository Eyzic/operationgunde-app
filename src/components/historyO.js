import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Calendar, CalendarList } from "react-native-calendars";
import StatItem from "./statItem";
import Normalize from "../Normalize";

const historyOver = (props) => {

  return (
    <View style={[styles.mainsquare]}>
      <View style={[styles.calendarholder]}>
        <CalendarList
          horizontal={true}
          pagingEnabled={true}
          firstDay={1}
          theme={{
            calendarBackground: "transparent",
            dayTextColor: "white",
            monthTextColor: "white",
            textSectionTitleColor: "white",
            textDisabledColor: "hsla(0, 0%, 100%, 0.4)",
            todayTextColor: "hsla(324, 53%, 50%,1)",
            arrowColor: "white",
            textMonthFontWeight: "bold",
            textMonthFontSize: Normalize(17),
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
              fontSize: Normalize(17),
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
    marginBottom: Normalize(5),
  },
  statistics: {
    height: "30%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    top: Normalize(15),
    marginBottom: Normalize(30),
  },

  calendarholder: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Normalize(20),
  },

  mainsquare: {
    backgroundColor: "hsla(268, 58%, 80%,1)",
    height: "65%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: Normalize(13),
    borderTopLeftRadius: Normalize(13),
  },
});
