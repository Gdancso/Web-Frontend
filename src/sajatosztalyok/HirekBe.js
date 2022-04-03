import React, { Component } from 'react';
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView } from 'react-native-web';
const IP = require('./ipcim.js');


//const ipcim="http://172.16.0.23:8080";
export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoading: true, dataSource2:[]}
    this.state = {

        hirek_cim: '',
        hirek_szoveg:"",

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
    //alert(JSON.stringify(this.state.dataSource))
    //split

  })
  .catch((error) =>{
    console.error(error);
  });


 }

  felvitel=async ()=>{
    //alert("Megnyomva")
    let bemenet={
      bevitel1: this.state.hirek_cim,
      bevitel2: this.state.hirek_szoveg,
    }
 
    fetch(IP.ipcim+'/Hirek_fel', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      } )
      .then((response) => response.text())
      .then((szoveg) => {

        //alert(szoveg)
        this.frissit()
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
      <View style={{alignItems:'center'}}>
      <View style={{padding: 10,marginVertical:15,backgroundColor:"#484a4d",alignItems:"center",alignSelf:"center",width:500,borderRadius:20,marginLeft:20,marginRight:20}}>
         <Text style={{padding: 10, fontSize: 20,color:"white"}}>
         Cím:
        </Text>
        <TextInput
        placeholderTextColor="#b3b3ff"
        style={{height: 40,color:"white",backgroundColor:"#585959",padding:10,borderRadius:10,textAlignVertical:"top"}}
          placeholder="Add meg a Címet"
          onChangeText={(hirek_cim) => this.setState({hirek_cim})}
          value={this.state.hirek_cim}
        />
         <Text style={{padding: 10, fontSize: 20,color:"white"}}>
          szöveg
        </Text>
        <TextInput
         multiline
         numberOfLines={30}
         placeholderTextColor="#b3b3ff"
          style={{height: 80,color:"white",backgroundColor:"#585959",padding:5,width:160,borderRadius:10,textAlignVertical:"top"}}
          placeholder=""
          onChangeText={(hirek_szoveg) => this.setState({hirek_szoveg})}
          value={this.state.hirek_szoveg}
        />
        

        <TouchableOpacity 
        onPress={async ()=>this.felvitel()}>
          <View style={{width:200,backgroundColor:"#b3b3ff",marginTop:10}}>
            <Text style={{textAlign:"center",padding:10}}>Felvitel</Text>
          </View>
        </TouchableOpacity>
       
      </View>
{/*Megjelenítés-------------------------------------------------------------------------------------------------------------------------*/}
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 30,
    marginVertical:30,
    flexDirection:"row",
    flexWrap:"wrap"
  },
  list:{
    alignItems:'center',
    
  },
});