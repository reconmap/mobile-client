import React, { useContext } from "react";
import { Text, View } from "react-native";
import AppContext from "../contexts/AppContext";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles,{ GRAY_600, RED_600} from './../styles/main'
import { ScrollView } from "react-native-gesture-handler";
import Heading from "../components/Heading";
import useFetch from "../hooks/useFetch";
import ListHeader from "../components/ListHeader";
import Paragraph from "../components/Paragraph";
import BtnSecondary from "../components/BtnSecondary";

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const insets = useSafeAreaInsets();
  const handleLogOut = () => {
    appContext.setLogged(false)
  }
  const {data: auditLogStats} = useFetch('/auditlog/stats')
  const {data: vulnerabilityStats} = useFetch('/vulnerabilities/stats')


  let vulnColors = {
    "none": 'white',
    "low": 'green',
    "medium": 'yellow',
    "high": 'orange',
    "critical": RED_600,
  }
  return (<View style={[styles.container,{paddingTop: insets.top,}]} >
      <Heading 
        title={`Hi ${appContext.userdata.name || "User"}`} 
        right={<BtnSecondary icon='logout' label='Log out' onPress={handleLogOut}/>} />
        <ScrollView>

      { auditLogStats ?
          <ScrollView  contentContainerStyle={{ alignItems:'flex-end', justifyContent:'flex-end'}} horizontal style={{  flexDirection:'row', height:100, flex:1}}>
            {auditLogStats.map((log,index)=> 
              <View key={index} style={{bottom: parseInt(log.total)/3, width:3, height:3, backgroundColor: RED_600, marginHorizontal:3, borderRadius:1}}></View>
            )}
          </ScrollView>:<Paragraph>No data</Paragraph>}
          <ListHeader title={'User activity over time'} line={false}/>

          { vulnerabilityStats ?
          <View style={{  flexDirection:'row', height:100, flex:1, alignItems:'flex-end'}}>
            {vulnerabilityStats.map((vuln,index)=> 
            <View style={{  flex:1}} key={index} >
              <Text style={{ color:GRAY_600, textAlign:'center', marginBottom: 5}}>{vuln.total}</Text>
              <View style={{height: vuln.total,  backgroundColor: vulnColors[vuln.risk], marginHorizontal:3, borderRadius:3}}></View>
              <Text style={{ fontWeight:'500', fontSize:12, marginTop:5, color:'white', textAlign:'center', marginBottom: 5, color: vulnColors[vuln.risk]}}>{vuln.risk}</Text>
            </View>
            )}
            </View>:<Paragraph>No data</Paragraph>}
          <ListHeader title={'Vulnerabilities by risk'} line={false}/>
        </ScrollView>
    </View>
  );
};

export default HomeScreen;
