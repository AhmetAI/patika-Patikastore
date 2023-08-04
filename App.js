import React from "react";
import {View, SafeAreaView, Text, FlatList, StyleSheet, TextInput} from "react-native";
import product_data from "./product.json"
import Products from "./components/Products"


const App = () => {

  const renderProduct = ({item}) => <Products product={item} />

  return(
    <SafeAreaView style={styles.container}>

         <Text style={styles.pati_store}>PATIKASTORE</Text>

        <TextInput
        style={styles.input}
        placeholder="Ara..."
        />

        <FlatList
          numColumns={2}
          keyExtractor={item=>item.id.toString()}
          data={product_data}
          renderItem={renderProduct}
        /> 
        
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#eceff1',
  },

  input: {
    margin: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
  },

  pati_store: {
    textAlign: "center",
    color: "purple",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 5,


  }

})


export default App;