import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity, Image, Alert, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            loading: true,
            dataSource:[]
        };
    }
    componentDidMount(){
    fetch("https://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/champion.json")
        .then(response => response.json())
        .then((responseJson)=> {

            let resultArray = [];
            let keys = Object.keys(responseJson.data);
            keys.forEach(function(key){
                resultArray.push(responseJson.data[key]);
            });
          this.setState({
           loading: false,
           dataSource:resultArray,
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

    FlatListItemSeparator = () => {
    return (
        <View style={{
            height: .5,
            width:"100%",
            backgroundColor:"rgba(0,0,0,0.5)",
            }}
        />
        );
    }

    renderItem=(data)=>
    <TouchableOpacity   style={styles.list}
                            onPress={() => this.props.navigation.navigate('Info', {data:data})
                        }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'http://ddragon.leagueoflegends.com/cdn/9.10.1/img/champion/' + data.image.full }}
            />
            <Text style={styles.lightText}>{data.id}{'\n'}</Text>
            <Text style={styles.lightText}>{data.title}</Text>
        </View>
    </TouchableOpacity>

    render(){
     if(this.state.loading){
      return(
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(
     <View style={styles.container}>
     <FlatList
        data= {this.state.dataSource}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem= {item=> this.renderItem(item.item)}
        // keyExtractor= {item=>item.key.toString()}
     />
    </View>
    )}
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   },
  list:{
    paddingVertical: 4,
    backgroundColor: '#142422'
   },
   lightText:{
    textAlign: 'left',
    alignSelf: "center",
    color: '#c9aa71',
   }
  });
