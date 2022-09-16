import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ProductCard from './components/productCard';
import patika_data from './patika_data.json';

function App() {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.app_name}>PATİKA STORE </Text>
        <View style={styles.search_bar}>
          <Text style={styles.search_text}> Ara.. </Text>
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={patika_data}
            renderItem={renderProduct}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  app_name: {
    color: '#8B008B',
    fontSize: 32,
    fontWeight: 'bold',
    margin: 10,
  },
  search_bar: {
    margin: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
  },
  search_text: {
    padding: 10,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
