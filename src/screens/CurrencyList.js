import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import _ from 'lodash';
import {getCurrencyList} from '../API/Requests';
import DefaultContainer from '../components/DefaultContainer';
import Loading from '../components/Loading';
import DataRow from './components/DataRow';
import {APP_STYLES} from '../styleguide/Styles';

const onDataRowPress = item => {
    console.log('pressed', item);
};

const renderDataRow = ({item}) => (
    <DataRow
        nominal={item.Nominal}
        name={item.Name}
        value={`${parseFloat(item.Value).toFixed(2)} ₽`}
        onPress={() => onDataRowPress(item)}
    />
);

const CurrencyList = props => {
    const [currencyList, setCurrencyList] = useState(null);

    useEffect(() => {
        console.log('effect in hooks worked');
        const test = async () => {
            const currencyData = await getCurrencyList();
            console.log(currencyData);
            if (currencyData) {
                let currencies = [];
                _.forEach(currencyData.Valute, (value, key) => {
                    currencies.push(value);
                });
                setCurrencyList(currencies);
            }
        };
        test();
    }, []);

    console.log(currencyList);

    return (
        <DefaultContainer>
            {currencyList && (
                <View style={{width: '100%'}}>
                    <FlatList
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        data={currencyList}
                        renderItem={renderDataRow}
                        contentContainerStyle={APP_STYLES.CONTENT_CONTAINER}
                    />
                </View>
            )}
            {!currencyList && <Loading />}
        </DefaultContainer>
    );
};

export default CurrencyList;
