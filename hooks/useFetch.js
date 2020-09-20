import AsyncStorage from '@react-native-community/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import configuration from '../Configuration';
import AppContext from '../contexts/AppContext';

export default function useFetch(endpoint) {
    const [data, setData] = useState();
    const appContext = useContext(AppContext)

    const fetchData = async () => {
        const token = await AsyncStorage.getItem('@accessToken')
        const response = await fetch(
            `${configuration[appContext.env].api.baseUrl}${endpoint}`,
            {
                method: "GET", headers: { Authorization: "Bearer " + token },
            }
        );
        const responseJSON = await response.json();
        setData(responseJSON);
    };
    useEffect(() => { fetchData(); }, []);

    return { data, fetchData }

}
