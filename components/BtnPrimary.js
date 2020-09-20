import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons";
import styles from '../styles/main';

export default function BtnPrimary({ label, icon, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <SimpleLineIcons name={icon} size={16} color='white'/>
                <Text style={styles.buttonTextSmall}>
                    {label}
                </Text>
            </TouchableOpacity>
    )
}
