import React from 'react';
import MaterialButtonDark from "../components/MaterialButtonDark";
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, Button,SafeAreaView,StatusBar } from 'react-native-web';


const ipcim="http://172.16.0.23:8080";
export default class FetchExample extends React.Component {


  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  rendezes_pont=()=>{
    alert("hello")
    return fetch(ipcim+'/rend_pont')
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

  rendezes_halal=()=>{
    alert("hello")
    return fetch(ipcim+'/rend_halal')
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

  rendezes_ido=()=>{
    alert("hello")
    return fetch(ipcim+'/rend_ido')
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

  rendezes_date=()=>{
    alert("hello")
    return fetch(ipcim+'/rend_date')
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

  fetch(ipcim+'/groupby', {
      method: "POST",
      body: JSON.stringify,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch(ipcim+'/groupby')
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
         <View style={styles.button} >
            <Button onPress={() => this.rendezes_pont()} title="Rendezés pont" />
          </View>
          <View style={styles.button} >
            <Button onPress={() => this.rendezes_halal()} title="Rendezés halal" />
          </View>
          <View style={styles.button} >
            <Button onPress={() => this.rendezes_ido()} title="Rendezés ido" />
          </View>
          <View style={styles.button} >
            <Button onPress={() => this.rendezes_date()} title="Rendezés date" />
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
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  },
  button: {
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "40%"
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
  }
});