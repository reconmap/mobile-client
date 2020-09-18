import React from 'react'
import { Text, View } from 'react-native'
import styles from './../styles/main'

export default function FullScreenMessage({children}) {
    return (
        <View style={{ flex:1, justifyContent:'center', }}>
        <Text style={styles.legend}>{children}</Text>
      </View>
    )
}
