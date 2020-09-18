import { AsyncStorage } from "react-native";

import configuration from '../Configuration';

async function secureApiFetch(input, init) {
    
    var initWithAuth = init;
    if (initWithAuth.hasOwnProperty('headers')) {
        Object.assign(initWithAuth.headers, headers);
    } else {
        initWithAuth.headers = headers;
    }

    return  fetch (configuration.api.baseUrl + input, init)
        .then((response) => {
            if (response.status === 401) {
                AsyncStorage.removeItem('accessToken');
                AsyncStorage.removeItem('isAuth');
                AsyncStorage.removeItem('user.id');
                AsyncStorage.removeItem('user');
            }

            return response;
        });
}

export default secureApiFetch
