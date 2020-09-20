import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons";
import styles from '../styles/main';

export default function BtnSecondary({ label, icon, onPress}) {
    return (
        <TouchableOpacity style={styles.buttonSecondary} onPress={onPress}>
            <SimpleLineIcons name={icon} size={16} color='white'/>
                <Text style={styles.buttonTextSmall}>
                    {label}
                </Text>
            </TouchableOpacity>
    )
}
