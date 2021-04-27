import React from 'react';

import { Dimensions } from 'react-native';

import PageHeader5 from '../../components/pageHeader5';
import StandardTemplate from '../../templates/StandardTemplate';
import ValueItem from '../../components/historyV';

import UserContext from '../../components/UserContext';

import Style from '../../styles/Style';

import local_ip from '../../local_ip';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const HistoryHrvScreen = ({ navigation }) => {
    const context = React.useContext(UserContext);
    const [HrvData, setHrvData] = React.useState({});

    React.useEffect(() => {
        let data = {
            user: context.user,
            date: new Date().toISOString().substr(0, 10)
        };

        getHrvHistory(data)
            .then(res => setHrvData(res));
    }, []);


    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader5
                meny1="flöde"
                meny2="översikt"
                meny4="värden"
                color1="black"
                color2="black"
                color4="#C631CA"
                text1="Din"
                text2="Historik"
                over="History"
                inst="HistoryCalendar"
                val="HistoryHrv"
                style={[Style.item]}
                nav={navigation}
            ></PageHeader5>

            <ValueItem date={HrvData.date} hrv={HrvData.hrv}></ValueItem>
        </StandardTemplate>
    );
}

function getHrvHistory(data) {
    let user = encodeURIComponent(data.user);
    let date = encodeURIComponent(data.date);
    let base = "http://localhost:5000/"
    return fetch(local_ip + `/api/form/stats?user_id=${user}&date=${date}`)
        .then(res => res.json())
        .catch(error => console.error(error));
}

export default HistoryHrvScreen;