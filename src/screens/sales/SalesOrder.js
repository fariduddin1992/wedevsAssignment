import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import BlueInput from '../../components/Input/BlueInput';
import {COLORS, FONTS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input, Button, Checkbox, FlatList} from 'native-base';
import {productListData} from '../../data/StaticProductList';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProductList,
  inputAddHandling,
} from '../../store/actions/SalesAction';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SalesOrder = () => {
  const dispatch = useDispatch();
  const salesData = useSelector(state => state.sales);
  const fillterProductList = useSelector(state => state.sales.filterProduct);

  useEffect(() => {
    let data = productListData();
    dispatch(getProductList(data));
  }, []);

  const handleInputChange = (inputName, inputValue) => {
    dispatch(inputAddHandling(inputName, inputValue));
  };

  const productSelected = item => {
    alert();
  };

  function renderProductFilter() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity onPress={() => productSelected(item)}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: SIZES.padding,
            }}>
            <Text
              style={{
                borderBottomColor: '#f7f7f7',
                borderBottomWidth: 1,
                padding: SIZES.padding,
              }}>
              {item.productName}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <FlatList
          keyExtractor={(contact, index) => String(index)}
          data={fillterProductList}
          renderItem={renderItem}
        />
      </View>
    );
  }

  //   function renderProductListByDefult() {
  //     return (

  // <View>

  //     <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               backgroundColor: '#fff',
  //               borderRadious: SIZES.radius,
  //               padding: 10,
  //               width:'100%'

  //             }}>
  //               {/* first column */}
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 paddingVertical: 10,
  //                 borderBottomColor: '#f7f7f7',
  //                 borderBottomWidth: 1,
  //                 width:'50%'
  //               }}>
  //               <View
  //                 style={{
  //                   marginRight: 10,
  //                 }}>
  //                 <Checkbox value="test" defaultIsChecked={false} />
  //               </View>
  //               <Text>Test</Text>
  //             </View>
  //              {/* second column */}
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 paddingVertical: 10,
  //                 borderBottomColor: '#f7f7f7',
  //                 borderBottomWidth: 1,
  //                 flexBasis:'50%'

  //               }}>
  //               <View
  //                 style={{
  //                   marginRight: 10,
  //                 }}>
  //                 <Checkbox value="test" defaultIsChecked={false} />
  //               </View>
  //               <Text>Test</Text>
  //             </View>
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 paddingVertical: 10,
  //                 borderBottomColor: '#f7f7f7',
  //                 borderBottomWidth: 1,
  //                 flexBasis:'50%'
  //               }}>
  //               <View
  //                 style={{
  //                   marginRight: 10,
  //                 }}>
  //                 <Checkbox value="test" defaultIsChecked={false} />
  //               </View>
  //               <Text>Test</Text>
  //             </View>
  //              {/* second column */}
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 paddingVertical: 10,
  //                 borderBottomColor: '#f7f7f7',
  //                 borderBottomWidth: 1,
  //                 flexBasis:'50%'

  //               }}>
  //               <View
  //                 style={{
  //                   marginRight: 10,
  //                 }}>
  //                 <Checkbox value="test" defaultIsChecked={false} />
  //               </View>
  //               <Text>Test</Text>
  //             </View>
  //           </View>

  //       </ScrollView>

  //       </View>
  //     );
  //   }

  function renderProductItem() {
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: SIZES.padding,
            zIndex: 0,
            marginBottom: 1,
          }}>
          <Text
            style={{
              flexBasis: '25%',
              color: COLORS.primary,
            }}>
            Product
          </Text>
          <Text
            style={{
              flexBasis: '20%',
              color: COLORS.primary,
            }}>
            Price
          </Text>
          <Text
            style={{
              flexBasis: '25%',
              color: COLORS.primary,
            }}>
            Quantity
          </Text>
          <Text
            style={{
              flexBasis: '23%',
              color: COLORS.primary,
            }}>
            Amount
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: SIZES.padding,
            borderBottomColor: '#f7f7f7',
            borderBottomWidth: 1,
            height: 80,
            alignment: 'center',
          }}>
          <View
            style={{
              flexBasis: '20%',
            }}>
            <Text
              style={{
                ...FONTS.body3,
              }}>
              Biscuite
            </Text>
          </View>
          <View
            style={{
              marginTop: -20,
              flexBasis: '20%',
            }}>
            <BlueInput />
          </View>
          <View
            style={{
              marginTop: -20,
              flexBasis: '20%',
            }}>
            <BlueInput />
          </View>
          <View
            style={{
              flexBasis: '20%',
            }}>
            <Text
              style={{
                ...FONTS.body3,
              }}>
              1000
            </Text>
          </View>
          <View
            style={{
              color: '#ccc',
            }}>
            <Text>
              <Icon name="delete" size={20} color="#ccc" />
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: SIZES.padding,
            borderBottomColor: '#ccc',
            height: 80,
            alignment: 'center',
          }}>
          <View
            style={{
              flexBasis: '20%',
            }}>
            <Text
              style={{
                ...FONTS.body3,
              }}>
              Biscuite
            </Text>
          </View>
          <View
            style={{
              marginTop: -20,
              flexBasis: '20%',
            }}>
            <BlueInput />
          </View>
          <View
            style={{
              marginTop: -20,
              flexBasis: '20%',
            }}>
            <BlueInput />
          </View>
          <View
            style={{
              flexBasis: '20%',
            }}>
            <Text
              style={{
                ...FONTS.body3,
              }}>
              1000
            </Text>
          </View>
          <View
            style={{
              color: '#ccc',
            }}>
            <Text>
              <Icon name="delete" size={20} color="#ccc" />
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          margin: SIZES.padding,
        }}>
        <BlueInput label="Distribution" />
        <BlueInput
          label="Product"
          onChangeText={value => handleInputChange('product', value)}
        />
        {renderProductFilter()}
        {/* {renderProductListByDefult()} */}
        {renderProductItem()}
        <Button style={{marginTop: SIZES.h4}} size="md">
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default SalesOrder;
