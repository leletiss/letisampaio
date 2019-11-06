import React, { Component } from 'react';
import {
 StyleSheet,
 Text, 
 View, 
 TextInput,
 Image,
 Button,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    	<Image style={{width: 120, height: 120,}} source={require("./assets/sorvete.png")} />

    	<Text style={{fontWeight: 'bold', fontSize: 25}}>  Le Ice Cream </Text>
    	<Text> Sabe aquele sabor, que de tão bom você nem consegue definir?</Text> 
    	<Text>Não consegue nomear, só sentir?</Text>
    	<Text>A Le IceCream Sorvetes é assim</Text>
    	<Text>Tem sabor de bons momentos</Text>
    	<Text>de dormir mais 5 minutinhos</Text>
    	<Text>daquele break no trabalho</Text>
    	<Text>de cantar no chuveiro</Text>
    	<Text>a sua música preferida</Text>
    	<Text>ou rir até a barriga doer</Text>
    	<Text>Tem sabor de Le Ice Cream</Text>
    	<Text>Sabor de felicidade</Text>
    	<Text> </Text>
    	<Button  value="Exibir Alert" style={styles.container} 
          onPress={() => { alert('@JohnTobaldini');}} title= "Seguir - @caragoxtosa " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
