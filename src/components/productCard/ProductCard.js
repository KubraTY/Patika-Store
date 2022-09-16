import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.product_box}>
        <View style={styles.box_top}>
          <Image style={styles.product_img} source={{uri: product.imgURL}} />
        </View>
        <View style={styles.box_bottom}>
          <Text style={styles.product_name}>{product.title}</Text>
          <Text style={styles.product_price}>{product.price}</Text>
          {!product.inStock && (
            <Text style={styles.product_stock}>STOKTA YOK</Text>
          )}
        </View>
      </View>
    </View>
  );
};
export default ProductCard;
