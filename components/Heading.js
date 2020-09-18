import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/main'

export default function Heading({title, right}) {
    return (
        <View style={styles.heading}>
            <Text style={styles.title}>{title}</Text>
            {right}
        </View>
    )
}
