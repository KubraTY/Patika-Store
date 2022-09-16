import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  product_box: {
    margin: 10,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  box_top: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  box_bottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
  },
  product_img: {
    minHeight: 150,
    resizeMode: 'contain',
  },
  product_name: {
    paddingTop: 5,
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  product_price: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '700',
  },
  product_stock: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
