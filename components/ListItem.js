import React from 'react'
import { Image, Text,TouchableOpacity, View } from 'react-native'
import styles from '../styles/main'
import MD5 from './../services/md5';

export default function ListItem({ title, description, avatar, onPress, end}) {
    return (
        <TouchableOpacity style={ styles.listItem} onPress={onPress}>
            {avatar && <Image style={ styles.listStart} source={{ uri : `https://www.gravatar.com/avatar/${MD5(avatar)}?s=200&d=robohash`}}/>}
            <View style={styles.listMiddle}>
                <Text style={ styles.listTitle }>{title}</Text>
                {description && <Text style={ styles.listDescription }>{description}</Text>}
            </View>
            {end && <Text style={ styles.listEnd }>{end}</Text>}
        </TouchableOpacity>
    )
}
