import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView } from 'react-native-web';

const ipcim="http://172.16.0.23:8080";
export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoading: true, dataSource2:[]}
    this.state = {

        ertekeles_nev: '',
        ertekeles_uzenet:"",

    };
  }

  

  render() {
    return (

        
      <View style={styles.scrollView}>
      <Iframe url="https://www.youtube.com/watch?v=9wwNDEADqVE"
        width="900px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    alignItem:'center',

  }
});