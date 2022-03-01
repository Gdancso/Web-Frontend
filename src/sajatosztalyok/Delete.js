import React, { Component } from 'react';
import { Text, TextInput, View,TouchableOpacity,FlatList,ActivityIndicator,ScrollView,StyleSheet,SafeAreaView,Button } from 'react-native-web';


const ipcim="http://172.16.0.23:8080";
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
    Torles=()=>{
        alert("hello")
        return fetch(ipcim+'/admin_torles_egyszeru')
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
{/*Megjelenítés-------------------------------------------------------------------------------------------------------------------------*/}
<View style={styles.list}>
        <FlatList

          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={{borderWidth:1,borderRadius:10,padding:10,width:300,marginLeft:13,paddingLeft:15,backgroundColor:"lightblue"}}>
            <Text style={{fontSize:20,padding:3,color:"white"}}>{item.ertekeles_uzenet} </Text>
            <Text style={{fontStyle:"italic",fontSize:15,padding:3}}>{item.ertekeles_nev} </Text>
            <Text style={{fontStyle:"italic",fontSize:15,padding:3}}>{item.ertekeles_id} </Text>
            <Button onPress={() => this.Torles()} title="Törlés" />
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