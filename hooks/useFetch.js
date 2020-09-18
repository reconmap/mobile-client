import React, { useCallback, useContext } from 'react'
import AppContext from '../contexts/AppContext';
import secureApiFetch from '../services/api'

export default function useFetch(endpoint) {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const appContext = useContext(AppContext)
    const fetchData = useCallback(async () => {
        try {
            const response = await secureApiFetch(endpoint, { 
                method: 'GET' , 
                headers: 
                {
                    Authorization: 'Bearer ' + appContext.userdata.access_token
                  }
            })
            const responseJSON = await response.json()
            setResponse(responseJSON)
        } catch (error) {
            setError(error);
        }
    }, [endpoint]);
    React.useEffect(() => {
        fetchData();
    }, [fetchData]);
    return [response, fetchData, error];

}
