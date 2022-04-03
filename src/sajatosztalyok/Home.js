import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView } from 'react-native-web';
const IP = require('./ipcim.js');


//const ipcim="http://192.168.2.106:8080";
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

        
      <View style={styles.container}>
      <Iframe url="https://www.youtube.com/embed/k03IHc1kdV4"
        width="900px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>

      <View>
        <Text style={styles.szoveg}>Üdvözöllek Játékos,</Text>
        <Text style={styles.szoveg}>
              Ebben a csodálatos platformer játékban, aminek Lonely Knight nevet adtunk. 
              Nem fogok hazudni a kaland, amibe belefogsz vágni nem lesz egyszerű és attól függően nem lesz rövid se. 
              Ezért készülj fel sok szörnyre és akadályra utazásod alatt. 
              A célodat csak te tudott teljesíteni, ami lehet, 
              hogy minél több ponttal térj vissza ebből a csodálatos kalandból vagy kirobbanó dühödben szegény billentyűzeted bánja a játékkal eltöltött drága idődet. 
              De a játék vége így is a fő menü lesz.
        </Text>
        
      </View>
      </View>
      
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: 'column'
  },
  szoveg:{
    marginBottom:5,
    marginTop:20,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft:5,
    marginRight:5

  }
});