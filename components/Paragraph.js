import React from 'react'
import { Text } from 'react-native'
import styles from '../styles/main'

export default function Paragraph({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}
