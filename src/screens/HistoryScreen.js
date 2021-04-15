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
    const [historyData, setHistoryData] = React.useState();
    console.log(historyData);

    React.useEffect(() => {

        let data = {
            user: context.user,
            date: new Date().toISOString().substr(0, 10)
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
    if (data) {
        return <HistoryItem date={data.date} duration={"2:00 h"} style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />
    } else { null }
}

function getHistory(data) {
    let user = encodeURIComponent(data.user);
    let date = encodeURIComponent(data.date);
    let base = "http://localhost:5000/"
    return fetch(base + `api/stats?user=${user}&date=${date}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export default HistoryScreen;