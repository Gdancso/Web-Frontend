import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView } from 'react-native-web';

const ipcim="https://s1.siralycore.hu:8084";
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
  return fetch(ipcim+'/ertekeles_uzenet')
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

  felvitel=async ()=>{
    alert("Megnyomva")
    let bemenet={
      bevitel1: this.state.ertekeles_nev,
      bevitel2: this.state.ertekeles_uzenet,
    }
 
    fetch(ipcim+'/ertekeles', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      } )
      .then((response) => response.text())
      .then((szoveg) => {

        alert(szoveg)
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

        
      <SafeAreaView>

    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      <ScrollView style={styles.scrollView}>
      
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
    flexDirection:"row",
    flexWrap:"wrap"
  },
  list:{
    alignItems:'center',
    
  },
});