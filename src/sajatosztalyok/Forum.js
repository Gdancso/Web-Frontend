import React, { Component } from 'react';
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
      <ScrollView style={styles.scrollView}>
      <View style={{alignItems:'center'}}>
      <View style={{padding: 10,backgroundColor:"blue",alignItems:"center",borderRadius:20,marginLeft:20,marginRight:20}}>
         <Text style={{padding: 10, fontSize: 20,color:"white"}}>
         Név:
        </Text>
        <TextInput
        placeholderTextColor="#b3b3ff"
          style={{height: 40,color:"white"}}
          placeholder="Add meg a nevedet!"
          onChangeText={(ertekeles_nev) => this.setState({ertekeles_nev})}
          value={this.state.ertekeles_nev}
        />
         <Text style={{padding: 10, fontSize: 20,color:"white"}}>
         Komment:
        </Text>
        <TextInput
         placeholderTextColor="#b3b3ff"
          style={{height: 40,color:"white",backgroundColor:"#0000b3",padding:10,borderRadius:10,height:80,textAlignVertical:"top"}}
          placeholder="Add meg a kommentet!"
          onChangeText={(ertekeles_uzenet) => this.setState({ertekeles_uzenet})}
          value={this.state.ertekeles_uzenet}
        />

        <TouchableOpacity 
        onPress={async ()=>this.felvitel()}>
          <View style={{width:200,backgroundColor:"#b3b3ff",marginTop:10}}>
            <Text style={{textAlign:"center",padding:10}}>Felvitel</Text>
          </View>
        </TouchableOpacity>
       
      </View>
{/*Megjelenítés-------------------------------------------------------------------------------------------------------------------------*/}
      
      <View style={styles.list}>
        <FlatList

          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={{borderWidth:1,borderRadius:10,padding:10,width:300,marginLeft:13,paddingLeft:15,backgroundColor:"lightblue"}}>
            <Text style={{fontSize:20,padding:3,color:"white"}}>{item.ertekeles_uzenet} </Text>
            <Text style={{fontStyle:"italic",fontSize:15,padding:3}}>{item.ertekeles_nev} </Text>
            <Text style={{fontSize:12}}>{item.ertekeles_date.split ("T")[0].trim()} </Text>
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
    flexDirection:"row",
    flexWrap:"wrap"
  },
  list:{
    alignItems:'center',
    
  },
});