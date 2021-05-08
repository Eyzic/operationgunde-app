import React from 'react';
import { Dimensions } from 'react-native';

import StandardTemplate from '../../templates/StandardTemplate';
import HistoryItem from '../../components/historyItem';
import PageHeader5 from '../../components/pageHeader5';

import UserContext from '../../components/UserContext';
import Style from '../../styles/Style';

import local_ip from '../../local_ip';

const HistoryScreen = ({ navigation }) => {
    const context = React.useContext(UserContext);
    const [historyData, setHistoryData] = React.useState(
    );

    React.useEffect(() => {
        let data = {
            user: context.user,
            //date: new Date().toISOString().substr(0, 10)
            number: 10
        };

        getHistory(data)
            .then(res => setHistoryData(res));
    }, []);

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader5
                text1='Din'
                text2='Historik'
                color1="#C631CA"
                color2="black"
                color4="black"
                over={'History'}
                over={"History"}
                meny1={"flöde"}
                inst={'HistoryCalendar'}
                meny2={"översikt"}
                val={'HistoryHrv'}
                meny4={"värden"} style={[Style.item]} hasImage={false}
                style={[Style.item]}
                nav={navigation}
            >
            </PageHeader5>
            { createHistoryItems(historyData, navigation)}

        </StandardTemplate >
    );
}

function createHistoryItems(data, nav) {
    const items = [];
    if (data) {
        for (const element of data) {
            items.push(<HistoryItem
                date={element.start_date_local}
                duration={element.elapsed_time}
                title={element.title}
                key={element.activity_id}
                avgHR={element.average_heartrate}
                distance={element.distance}
                type={element.type}
                style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }}
                action={() => {

                    let historyDetails = {
                        activity_id: element.activity_id,
                        activity_title: element.title,
                        date: element.start_date_local,
                        duration: formatTime(element.elapsed_time),
                        avg_HR: element.average_heartrate,
                        meters: element.distance
                    }

                    nav.navigate("SingleActivity", historyDetails)
                }
                }
            />);
        }
    }
    return items
}

function getHistory(data) {
    let user = encodeURIComponent(data.user);
    let number = encodeURIComponent(data.number);
    let base = "http://localhost:5000/"
    return fetch(local_ip + `/api/activities?user_id=${user}&nb_activities=${number}`)
        .then(res => res.json())
        .catch(error => console.error(error));
}

const leftPad = (value, length) => value.toString().length < length ? leftPad("0" + value, length) : value;

function formatTime(timeInSeconds) {
    let hours = Math.floor((timeInSeconds / (60 * 60) % 60));
    hours = leftPad(hours, 2);

    let minutes = Math.floor((timeInSeconds / (60)) % 60);
    minutes = leftPad(minutes, 2);

    let seconds = Math.floor(timeInSeconds % 60);
    seconds = leftPad(seconds, 2);

    let displayTime = hours + ":" + minutes + " h";
    return displayTime;
}

export default HistoryScreen;