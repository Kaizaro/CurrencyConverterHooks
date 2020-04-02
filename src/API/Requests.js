import {fetchJSON} from './Fetch';

export const getCurrencyList = async () => {
    return await fetchJSON('https://www.cbr-xml-daily.ru/daily_json.js');
};
