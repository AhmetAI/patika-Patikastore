import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./Products.style.js"

const Products = ({product}) => {
    return (

        <View style={styles.card_container}>
            <View style={styles.card_top}>
                <Image style={styles.image} source={{uri:product.imgURL}} />
            </View>
            <View style={styles.card_body}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.product_inStock}>{product.inStock ?  "" : "STOKTA YOK"} </Text>

            </View>

        </View>

    );
}


export default Products;