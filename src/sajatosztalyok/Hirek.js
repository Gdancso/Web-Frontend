import React, { Component } from 'react';
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView } from 'react-native';
const IP = require('./ipcim.js');



//const ipcim="http://172.16.0.23:8080"
export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoading: true, dataSource2:[]}
    this.state = {

        ertekeles_nev: '',
        ertekeles_uzenet:"",

    };
  }

  
 frissit =()=>{
  return fetch(IP.ipcim+'/hirek_szoveg')
  .then((response) => response.json())
  .then((responseJson) => {

    this.setState({
      isLoading: false,
      dataSource: responseJson,
    }, function(){

    });
    alert(JSON.stringify(this.state.dataSource))
    //split

  })
  .catch((error) =>{
    console.error(error);
  });


 }
  componentDidMount(){
    this.frissit()
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{alignItems:'center'}}>
{/*Megjelenítés-------------------------------------------------------------------------------------------------------------------------*/}
      
      <View style={styles.list}>
        <FlatList

          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={{borderWidth:1,borderRadius:10,padding:10,width:300,marginLeft:13,paddingLeft:15,backgroundColor:"lightblue"}}>
            <Text style={{fontSize:20,padding:3,color:"Black"}}>{item.hirek_cim} </Text>
            <Text style={{fontStyle:"italic",fontSize:15,padding:3}}>{item.hirek_szoveg} </Text>
            <Text style={{fontSize:12}}>{item.hirek_datum.split ("T")[0].trim()} </Text>
          </View>
          
        }
          keyExtractor={({ertekeles_id}, index) => ertekeles_id}
        />
      </View>
      
      </View>
      </ScrollView>
      </SafeAreaView>
      
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: 'lightgrey',
    marginHorizontal: 30,
    marginVertical:30,
    width:350
    
  },
  list:{
    alignItems:'center',
    
  },
});