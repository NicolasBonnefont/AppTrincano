import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView, Image,
  ImageBackground, StyleSheet,
  Tetx,
  Text
} from 'react-native';

import { RectButton, ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/login/logo.png'


// import { Container } from './styles';

const login = () => {
  return (
    <View style={styles.containerPrincipal}>

      <Image style={styles.logo} source={logo}  />


      <View style={styles.card}>

        
          <Text style={styles.tituloBemvindo} > Seja bem-vindo.</Text>


          <Text style={styles.tituloLogin}>Já tem cadastro?</Text>
          <TouchableOpacity style={styles.btnLogar}><Text style={styles.tituloBtnLogar}>LOGIN</Text></TouchableOpacity>

          <Text style={styles.tituloCadastro}>É novo aqui?</Text>
          <TouchableOpacity style={styles.btnCadastro}><Text style={styles.tituloBtnCadastro}>CADASTRE-SE</Text></TouchableOpacity>

      

      </View>



    </View>

  );
}

export default login;

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: '#11151D',
    flex: 1,

  },
  titulo: {
    color: 'black'
  },
  tituloBtnLogar: {
    color: '#fff',
  },
  tituloBtnCadastro: {

  },
  tituloLogin:{
    marginBottom:5,
    fontSize:15

  },
  tituloCadastro:{
    marginBottom:5,
    marginTop:30,
    fontSize:15

  },
  tituloBemvindo:{
    color:'#11151D',
    fontSize:20,
    marginBottom:'auto',
    marginTop:20
  },


  logo: {
    flex:1,
    resizeMode: 'contain'
  },


  card: {
    backgroundColor: '#fff',
    width: 328,
    height: 359,
    marginTop: 'auto',
    borderRadius: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20
  },
  btnLogar: {
    backgroundColor: '#11151D',
    borderRadius: 20,
    width: 311,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center'

  },
  btnCadastro: {
    borderRadius: 20,
    width: 311,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#11151D',
    borderWidth:1,
    backgroundColor:'#FCFDFF'

  }



})

