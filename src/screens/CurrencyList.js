import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {getCurrencyList} from '../API/Requests';
import DefaultContainer from '../components/DefaultContainer';

const CurrencyList = props => {
    const [currencyList, setCurrencyList] = useState(null);

    useEffect(() => {
        console.log('effect in hooks worked');
        const test = async () => {
            const currencyData = await getCurrencyList();
            console.log(currencyData);
            setCurrencyList(currencyData);
        };
        test();
    }, []);

    console.log(currencyList);

    return (
        <DefaultContainer>
            {currencyList && (
                <FlatList
                    data={}
                    renderItem={}
                />
            )}
        </DefaultContainer>
    );
};

export default CurrencyList;
