import * as React from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';

export function Home({navigation}){
    return(
        <View style={styles.container}> 
         <View style={styles.countContainer}>
        <Text style={styles.countContainer,{
          fontSize:55,
          marginTop:100,
          color:'#ffcc00'
        }} 
        >backpack</Text>
        <Text style={styles,{
          color:'#7f7f7f',
          marginTop:10,
          fontSize:12,
        }}>Troirc swith pooopo Maco from varal</Text>
        <View>
          <Text style={styles,{
            color:'#007fff',
            marginLeft:250,
            marginTop:-70,
            fontSize:15,
          }}>O</Text>
        </View>
       
      </View>
        <TouchableOpacity style={styles.Button}>
            <Text style={styles,{
                color:'blue',
                
                fontSize:25,
                marginLeft:90,
                height:40,
                shadowOpacity:0.5
            }}
            title='go to jane profile'zz
            onPress={() => navigation.navigate('Profile',{name:'Jane'})}
            >Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button,{
                backgroundColor:"blue",
                marginTop:15,
                marginLeft:50,
                borderRadius:10,
                width:250,
            height:40,
                borderWidth:0.2
            }}>
              <Text style={styles,{
                      color:'#ffffff',
                   
                      fontSize:25,
                      marginLeft:90,
                      shadowOpacity:0.5
              }}
              title="fr"
              onPress={()=> navigation.navigate('chitiet',{name:'decd'})}
              >Sing up</Text>
            </TouchableOpacity>
            <View>
        <Text style={styles,{
          fontSize:25,
          color:'#7f7f7f',
          marginTop:50,
          textAlign:'center'
        }}>Alternato</Text>
        <Text style={styles,{
          backgroundColor:'#7f7f7f',
          width:115,
          height:2,
          marginTop:10,
          marginLeft:130
        }}></Text>
      </View>
        </View>
    )
}
const styles= StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
},
Button:{
    marginTop:200,
    marginLeft:50,
    borderRadius:10,
    width:250,
    height:40,
    borderWidth:0.2,
backgroundColor:'#ffffff'
},
    countContainer: {
        marginTop:-20,
        alignItems: "center",
        padding: 10
      },
}
)