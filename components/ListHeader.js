import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/main'

export default function ListHeader({title,line=true}) {
    return (
        <View style={ styles.listHeader }>
            <Text style={styles.listHeaderTitle}>{title}</Text>
            { line &&<View style={styles.listHeaderLine}/>}
        </View>
    )
}
