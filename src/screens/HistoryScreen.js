import React from 'react';
import { Dimensions } from 'react-native';

import StandardTemplate from '../templates/StandardTemplate';
import HistoryItem from '../components/historyItem';
import PageHeader from '../components/pageHeader';

import UserContext from '../components/UserContext';
import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const HistoryScreen = ({ navigation }) => {
    const context = React.useContext(UserContext);
    const [historyData, setHistoryData] = React.useState(
    );

    React.useEffect(() => {
        let data = {
            user: context.user,
            //date: new Date().toISOString().substr(0, 10)
            number: 5
        };

        getHistory(data)
            .then(res => setHistoryData(res));
    }, []);

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader text1='Din' text2='Historik' style={[Style.item]} hasImage={false}>
            </PageHeader>
            {renderHistoryItems(historyData)}

        </StandardTemplate>
    );
}

function renderHistoryItems(data) {
    const items = [];
    if (data) {
        for (const element of data) {
            items.push(<HistoryItem
                date={element.start_date_local}
                duration={`${element.elapsed_time} h`}
                title={element.title}
                key={element.activity_id}
                avgHR={element.average_heartrate}
                distance={element.distance}
                type={element.type}
                style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />);
        }
    }
    return items
}

function getHistory(data) {
    let user = encodeURIComponent(data.user);
    let number = encodeURIComponent(data.number);
    let base = "http://localhost:5000/"
    return fetch(base + `api/activities?user_id=${user}&nb_activities=${number}`)
        .then(res => res.json())
        .catch(error => console.error(error));
}

export default HistoryScreen;