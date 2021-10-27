import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES, images} from '../constants';
import Headerbar from '../components/Headerbar';
import DashboardCard from '../components/DashboardCard';
import BarchartComponents from '../components/BarchartComponents';
import Searchbar from '../components/Searchbar/Searchbar';
import {categoryData, productListData} from '../data/StaticProductList';

const Home = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectCategoryProduct, setSelectCategoryProduct] =
    React.useState(null);

  useEffect(() => {
    let categoryList = categoryData();
    let productList = productListData();

    console.log(`productList`, productList);
    console.log(`categories`, categories);
    setCategories(categoryList);
    setProduct(productList);
  }, []);

  function imageSolide() {
    return (
      <View
        style={{
          marginTop: 20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={images.slider}
            resizeMode="cover"
            style={{
              width: SIZES.width,
              height: 150,
            }}
          />
          <Image
            source={images.slider1}
            resizeMode="cover"
            style={{
              width: SIZES.width,
              height: 150,
            }}
          />
          <Image
            source={images.slider2}
            resizeMode="cover"
            style={{
              width: SIZES.width,
              height: 150,
            }}
          />
        </ScrollView>
      </View>
    );
  }
  function onSelectCategory(category) {
    console.log(`category`, category);
    let productData = product.filter(a => a.categories.includes(category.id));
    setSelectCategoryProduct(productData);
    setSelectedCategory(category);
  }
  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor:'#f7f7f7',
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 100,
              height: 100,
              
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: COLORS.secondary,
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                overflow: 'hidden',
                padding: SIZES.padding,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color: COLORS.darkgray,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: SIZES.padding * 2}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.body3}}>Category</Text>
          <Text style={{...FONTS.body3}}>See All({categories.length})</Text>
        </View>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  }

  // product list
  function renderProductList() {
    const renderProduct = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            marginBottom: 20,
            // flexBasis:'50%',
            width:180,
            justifyContent: 'space-between',
            backgroundColor:'#fff',
            height:230,
            ...styles.shadow,
            justifyContent:'center',
            
          }}>
          <Image
            source={item.photo}
            rlesizeMode="cover"
            style={{
              width: 180,
              height: 180,
              // overflow: 'hidden',
              // padding: SIZES.padding,
            }}
          />
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            padding:SIZES.padding
          }}>
            <Text style={{
              ...FONTS.h4
            }}>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
          
        </TouchableOpacity>
      );
    };
    return (
      <View>
         <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:SIZES.padding
          }}>
          <Text style={{...FONTS.body3}}>Category</Text>
          <Text style={{...FONTS.body3}}>See All({product.length})</Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            data={product}
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={product => `${product.id}`}
            renderItem={renderProduct}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Headerbar 
          menuname="Dashboard" 
          navigation={navigation} 
          icon="menu"
          back={false} 
        />
        <ScrollView>
          <View
            style={{
              padding: SIZES.padding2,
            }}>
            <Searchbar />
            {imageSolide()}
            {renderMainCategories()}
            {renderProductList()}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
export default Home;
