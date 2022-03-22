import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, Button,SafeAreaView,StatusBar } from 'react-native-web';


const ipcim="http://192.168.2.106:8080";
export default class FetchExample extends React.Component {


  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  rendezes_pont=()=>{
    //alert("hello")
    return fetch(ipcim+'/rend_pont')
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

  rendezes_halal=()=>{
    //alert("hello")
    return fetch(ipcim+'/rend_halal')
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

  rendezes_ido=()=>{
    //alert("hello")
    return fetch(ipcim+'/rend_ido')
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

  rendezes_date=()=>{
    //alert("hello")
    return fetch(ipcim+'/rend_date')
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


  Torles=(id)=>{
    //alert("hello")
    var bemenet={
      bevitel1:id
     
    }
  
    fetch(ipcim+'/admin_torles_egyszeru', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => {
    //alert(y)
    this.frissit()
  });
    
    
}
Torles=(id)=>{
  //alert("hello")
  var bemenet={
    bevitel1:id
   
  }

  fetch(ipcim+'/admin_torles_statisztika', {
    method: "POST",
    body: JSON.stringify(bemenet),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }

)
.then(x => x.text())
.then(y => {
 // alert(y)
  this.frissit()
});
  
  
}
  szavazat=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch(ipcim+'/statisztika', {
      method: "POST",
      body: JSON.stringify,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }

  

  frissit =()=>{
    return fetch(ipcim+'/statisztika')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        //alert(JSON.stringify(this.state.dataSource))
        //split
        //let T = this.state.dataSource
        /*for (let index = 0; index < T.length; index++) {
          var element = T[index];
          split_element = element.split("T", -2);
          //element.split("T", -2);
          
        }*/
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidMount(){
    this.frissit()
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
              <Button onPress={() => this.rendezes_pont()} title="Rendezés pont" />
            </View>
            <View style={styles.kekgomb} >
              <Button onPress={() => this.rendezes_halal()} title="Rendezés halal" />
            </View>
            <View style={styles.kekgomb} >
            <Button onPress={() => this.rendezes_ido()} title="Rendezés ido" />   
            </View>
            <View style={styles.kekgomb} >
              <Button onPress={() => this.rendezes_date()} title="Rendezés date" />
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
            <View style={styles.head} >
              <Text style={{color:"white",fontSize:25,textAlign:"center",marginTop:5,marginBottom:5}}>Elért Pálya</Text>
            </View>
            <View style={styles.head} >
              <Text style={{color:"white",fontSize:25,textAlign:"center",marginTop:5,marginBottom:5}}>Elért Pálya</Text>
            </View>
            <View style={styles.head} >
              <Text style={{color:"white",fontSize:25,textAlign:"center",marginTop:5,marginBottom:5}}>Elért Pálya</Text>
            </View>
            <View style={styles.head} >
            </View>
          </View> 
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          
          <View style={styles.container}>
             <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_nev}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_pont}</Text>
            </View>
            <View style={styles.rect} >
            <Text style={styles.Text}>{item.statisztika_halal}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_ido}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_level_id}</Text>
            </View>
            <View style={styles.rect} >
              <Text style={styles.Text}>{item.statisztika_date.split ("T")[0].trim()}</Text>
            </View>
            <View style={styles.rect} >
              <Button style={styles.gomb} onPress={() => this.Torles(item.statisztika_id)} title="Törlés" />
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
    flexDirection: 'row',

  },
  containerbutton: {
    flexDirection: 'row'
  },
  rect: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(2,2,2,0.75)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect2: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(2,2,2,0.75)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop:5
  },

  kekgomb: {
    alignItems: "center",
    padding: 5,
    width:200,
  },
  gomb: {
    marginTop:5
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
    width: 150,
    height: 46
  }
});