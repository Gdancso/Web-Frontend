import React, { Component } from 'react';
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView } from 'react-native-web';


const ipcim="http://192.168.2.106:8080";
export default class Bevitel extends Component {
  constructor(props) {
    super(props);
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
    kereses=async ()=>{
        let bemenet2={
            bevitel1: this.state.ertekeles_uzenet
          }
        fetch(ipcim+'/kereses', {
      method: "POST",
      body: JSON.stringify(bemenet2),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      } )
      .then((response) => response.json())
      .then((eredmeny) => {

        alert(eredmeny)

        this.setState({
          isLoading: false,
          dataSource: eredmeny,
        }, function(){
    
        });
      })
      .catch((error) =>{
        console.error(error);
      });

    }


    
  felvitel=async ()=>{
    alert("Megnyomva")
    let bemenet={
      bevitel1: this.state.ertekeles_id,
    }
    

 
    fetch(ipcim+'/admin_torles', {
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
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{alignItems:'center'}}>

      <View style={{width:350,padding: 10,backgroundColor:"grey",alignItems:"center",borderRadius:20,marginLeft:20,marginRight:20}}>
         <Text style={{padding: 10, fontSize: 20,color:"white"}}>
         Törlés uzenet kulcsszo:
        </Text>
        <TextInput
        placeholderTextColor="#b3b3ff"
          style={{height: 40,color:"white"}}
          placeholder="Add meg a Kulcsszót!"
          onChangeText={(ertekeles_uzenet) => this.setState({ertekeles_uzenet})}
          value={this.state.ertekeles_uzenet}
        />
        <TouchableOpacity 
        onPress={async ()=>this.kereses()}>
          <View style={{width:200,backgroundColor:"#b3b3ff",marginTop:10}}>
            <Text style={{textAlign:"center",padding:10}}>Kereses</Text>
          </View>
        </TouchableOpacity>
       
      </View>



      <View style={{width:350,padding: 10,backgroundColor:"grey",alignItems:"center",borderRadius:20,marginLeft:20,marginRight:20}}>
         <Text style={{padding: 10, fontSize: 20,color:"white"}}>
         Törlés komment id:
        </Text>
        <TextInput
        placeholderTextColor="#b3b3ff"
          style={{height: 40,color:"white"}}
          placeholder="Add meg a Komment id-t!"
          onChangeText={(ertekeles_id) => this.setState({ertekeles_id})}
        />
        <TouchableOpacity 
        onPress={async ()=>this.felvitel()}>
          <View style={{width:200,backgroundColor:"#b3b3ff",marginTop:10}}>
            <Text style={{textAlign:"center",padding:10}}>Törlés</Text>
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
            <Text style={{fontStyle:"italic",fontSize:15,padding:3}}>{item.ertekeles_id} </Text>
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
    width:350
    
  },
  list:{
    alignItems:'center',
    
  },
});