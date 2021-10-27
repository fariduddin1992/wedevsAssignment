import React from 'react';
import {StyleSheet} from 'react-native'
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../../constants';

const Searchbar = () => {
  return (
    <>
      <VStack width="100%" space={5} alignItems="center">
       
        <Input
          placeholder="Search Products"
          bg="#fff"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          // InputRightElement={
          //   <Icon
          //     m="2"
          //     mr="3"
          //     size="6"
          //     color="gray.400"
          //     as={<MaterialIcons name="mic" />}
          //   />
          // }
        />
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
export default Searchbar;
