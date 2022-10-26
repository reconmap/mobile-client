import React from "react";
import { View,  ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../styles/main";
import { ScrollView } from "react-native-gesture-handler";
import useFetch from "../hooks/useFetch";
import ListItem from "../components/ListItem";
import FullScreenMessage from "../components/FullScreenMessage";
import Heading from "../components/Heading";

export default function ReportsScreen() {
    const insets = useSafeAreaInsets();

    const { data: reports } = useFetch('/reports')
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
             <Heading title="Saved Reports" />


            {!reports ?
                <ActivityIndicator />
                : reports.length === 0 ?
                    <FullScreenMessage>Nothing to show</FullScreenMessage>
                    : (
                        <ScrollView style={styles.listWrapper}>
                            {reports.map((report, index) =>
                                <ListItem key={index} title={report.project_name} description={report.format} />
                            )}
                        </ScrollView>
                    )}
        </View>

    )
}
