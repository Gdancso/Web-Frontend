import React from 'react';
import MaterialButtonDark from "../components/MaterialButtonDark";
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, Button,SafeAreaView,StatusBar } from 'react-native-web';
const IP = require('./ipcim.js');



//const ipcim="http://192.168.2.106:8080";
export default class FetchExample extends React.Component {


  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  rendezes_pont=()=>{
    alert("hello")
    return fetch(IP.ipcim+'/rend_pont')
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

  rendezes_osszes_pont=()=>{
    alert("hello")
    return fetch(IP.ipcim+'/rend_osszes_pont')
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

  rendezes_nev=()=>{
    alert("hello")
    return fetch(IP.ipcim+'/rend_nev')
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



  szavazat=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch(IP.ipcim+'/groupby', {
      method: "POST",
      body: JSON.stringify,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch(IP.ipcim+'/groupby')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        alert(JSON.stringify(this.state.dataSource))
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <View style={styles.container}>
         <View style={styles.kekgomb} >
            <Button onPress={() => this.rendezes_nev()} title="Rendezés Név" />
          </View>
          <View style={styles.kekgomb} >
            <Button onPress={() => this.rendezes_osszes_pont()} title="Rendezés pont" />
          </View>
          <View style={styles.kekgomb} >
            <Button onPress={() => this.rendezes_ido()} title="Rendezés ido" />
          </View>
        </View>

        <View style={styles.container}>
            <View style={styles.head} >
              <Text style={{color:"white",fontSize:25,textAlign:"center",marginTop:5,marginBottom:5}}>Név</Text>
            </View>
            <View style={styles.head} >
              <Text style={{color:"white",fontSize:25,textAlign:"center",marginTop:5,marginBottom:5}}>Pontszám</Text>
            </View>
            <View style={styles.head} >
              <Text style={{color:"white",fontSize:25,textAlign:"center",marginTop:5,marginBottom:5}}>Elért Pálya</Text>
            </View>
          </View>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          
          <View style={styles.container}>
            <View style={styles.rect}>
              <Text style={styles.Text}>{item.statisztika_nev}</Text>
              </View>
            <View style={styles.rect}>
              <Text style={styles.Text}>{item.osszes_pont}</Text>
              </View>
            <View style={styles.rect}>
              <Text style={styles.Text}>{item.elert}</Text>
              </View>
          </View>
          }
          keyExtractor={({statisztika_id}, index) => statisztika_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({


  
  container: {
    flex: 1,
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: 'row'
  },
  rect: {
    width: 304,
    height: 50,
    backgroundColor: "rgba(2,2,2,0.75)",
    borderWidth: 1,
    borderColor: "#000000"
  },

  kekgomb: {
    alignItems: "center",
    padding: 5,
    width:200,
  },
  button: {
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "40%",
    alignSelf:"center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Text:{
    textAlign:"center",
    color:"white",
    fontSize: 20,
    marginTop: 15,
    marginBottom:5
  },
  head: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    backgroundColor: "rgba(2,2,2,1)",
    width: 304,
    height: 46
  }
});