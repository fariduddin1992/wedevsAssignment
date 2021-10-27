import {StyleSheet, Dimensions} from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width / 541;

const textColorDefault = '';

const primaryBgColor = '#4787F5';
const primaryTextColor = '#4787F5';

const secondaryBgColor = '';
const secondaryTextColor = '#ccc';

const successBgColor = '';
const successTextColor = '';

const primaryColorBg = '#0062cc';
const btnPrimaryColorBorder = '#0062cc';
const btnPrimaryColorText = '#fff';

const headerBottomBorderColor = '#ccc';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  mainContainer: {
    flex: 1,
  },
  verticelCenter:{
    flexDirection:'row',
    alignItems:'center'
  },

  rowDirection: {
    flexDirection: 'row',
  },
  flexBasis90: {
    flexBasis: '90%',
  },
  flexBasis60: {
    flexBasis: '60%',
  },
  flexBasis65: {
    flexBasis: '65%',
  },
  flexBasis50: {
    flexBasis: '50%',
  },
  flexBasis40: {
    flexBasis: '40%',
  },
  flexBasis55: {
    flexBasis: '55%',
  },
  flexBasis53: {
    flexBasis: '53%',
  },
  flexBasis35: {
    flexBasis: '35%',
  },
  flexBasis48: {
    flexBasis: '48%',
  },
  flexBasis20: {
    flexBasis: '20%',
  },
  flexBasis25: {
    flexBasis: '25%',
  },
  flexBasis10: {
    flexBasis: '10%',
  },
  flexBasis15: {
    flexBasis: '15%',
  },
  flexBasis30: {
    flexBasis: '30%',
  },
  flexBasis100: {
    flexBasis: '100%',
  },
  flexBasis47: {
    flexBasis: '47%',
  },
  flexBasis45: {
    flexBasis: '45%',
  },
  flexBasis80: {
    flexBasis: '80%',
  },
  flexBasis85: {
    flexBasis: '80%',
  },
  flexBasis70: {
    flexBasis: '70%',
  },
  backgroundColor: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    height: '100%',
  },
  layout: {
    flexDirection: 'row',
  },
  BGlightBlue: {
    backgroundColor: '#F3F6FA',
  },

  bgbox: {
    backgroundColor: '#fff',
    borderRadius: 6,
    textAlign: 'center',
    margin: 10,
    padding: 15,
    shadowColor: '#00000060',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  squareBoxShadow: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    paddingBottom: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  BoxShadow: {
    shadowOffset: {
      width: 0,
      height: 2,
      shadowColor: '#000',
    },
    shadowOpacity: 0.2,
    elevation: 8,
  },
  bgboxMac: {
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    paddingTop: 15,
    shadowColor:
      Platform.OS === 'ios' ? 'rgba(0, 0, 0, 9)' : 'rgba(0, 0, 0, 5)',
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.5,
    elevation: Platform.OS === 'ios' ? 1 : 8,
    shadowRadius: Platform.OS === 'ios' ? 4 : 10,
    shadowOffset:
      Platform.OS === 'ios' ? {width: 2, height: 2} : {width: 23, height: 1},
  },
  CardShadow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },

  whiteBg: {
    backgroundColor: '#fff',
  },
  grayBg: {
    backgroundColor: '#F3F6FA',
  },
  required: {
    color: 'red',
  },
  boxShadow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 1},
  },
  Shadow: {
    backgroundColor: '#fff',

    textAlign: 'center',

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  headerButtonStyle: {
    marginRight: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    height: Platform.OS === 'ios' ? 40 : 47,
    width: Platform.OS === 'ios' ? 40 : 47,
    borderRadius: 50,
    padding: 13,
    paddingLeft: 14,
    marginBottom: Platform.OS === 'ios' ? 15 : 0,
    marginTop: Platform.OS === 'ios' ? 15 : 0,
  },
  ListboxShadow: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.1,

    elevation: 2,
  },
  button: {
    // marginTop: 35,
    // marginBottom: 35,
    backgroundColor: '#147AD6',
    padding: 12,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 20,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4687F5',
    color: '#fff',
    textAlign: 'center',
    fontSize:13,
    width: '95%',
    borderRadius: 10,
    marginVertical: 30,
    justifyContent: 'center',
    marginLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
  },
  saveButtonGreen: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,

    backgroundColor: '#14B665',
    padding: 17,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },

  saveButtonDark: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 35,
    backgroundColor: 'black',
    padding: 17,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },

  saveButton: {
    marginBottom: 35,
    backgroundColor: '#0A84FF',
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 2,
  },
  saveButtonRed: {
    marginBottom: 35,
    backgroundColor: '#FF0000',
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 2,
  },

  buttonPrimary: {
    backgroundColor: '#147AD6',
  },
  buttonCancel: {
    backgroundColor: '#D5D8DE',
    color: '#000',
    fontWeight: 'bold',
  },
  buttonSuccess: {
    backgroundColor: '#4787F5',
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    fontWeight: 'bold',
    color: '#17a2b8',
    backgroundColor: 'transparent',
    lineHeight: 1.5,
    paddingHorizontal: 8,
    paddingVertical: 14,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 4,
    fontSize: 16,
    borderColor: 'white',
    borderRadius: 5,
  },
  textCenter: {
    textAlign: 'center',
  },
  pl10: {
    paddingLeft: 10,
  },
  pr10: {
    paddingRight: 10,
  },
  pr5: {
    paddingRight: 5,
  },
  pl5: {
    paddingLeft: 5,
  },
  textLeft: {
    textAlign: 'left',
  },
  textPrimary: {
    color: '#4F67D2',
  },
  textWhite: {
    color: '#fff',
  },
  textDanger: {
    color: '#DE5050',
  },
  textSuccess: {
    color: '#65BB6B',
  },
  textSecondary: {
    color: 'gray',
  },
  textDark: {
    color: '#000000',
  },
  bgSuccess: {
    backgroundColor: '#14B665',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  btnSm: {
    paddingHorizontal: 5,
    paddingVertical: 4,
    lineHeight: 1.5,
    borderRadius: 4,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr20: {
    marginRight: 20,
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb20: {
    paddingBottom: 20,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt15: {
    paddingTop: 15,
  },
  pt20: {
    paddingTop: 20,
  },

  btnInfo: {
    color: btnPrimaryColorText,
    backgroundColor: '#17a2b8',
    borderColor: '#17a2b8',
    borderWidth: 1,
  },
  btnPrimary: {
    color: btnPrimaryColorText,
    backgroundColor: primaryColorBg,
    borderColor: btnPrimaryColorBorder,
    borderWidth: 1,
  },
  pickerItem: {
    width: '100%',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
    backgroundColor: '#F4F7FA',
  },

  bgGreen: {
    backgroundColor: '#65BB6B',
  },
  bgRed: {
    backgroundColor: '#DE5050',
  },
  bgDefault: {
    backgroundColor: '#676767',
  },
  bgPrimary: {
    backgroundColor: '#4787F5',
  },
  bgDanger: {
    backgroundColor: '#E25757',
  },
  textWhite: {
    color: '#ffffff',
  },
  textRight: {
    textAlign: 'right',
  },
  borderRadius: {
    borderRadius: 30,
  },
  borderRadius6: {
    borderRadius: 6,
  },
  padding15: {
    padding: 15,
  },
  padding10: {
    padding: 10,
  },
  paddingTop10: {
    paddingTop: 10,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  padding5: {
    padding: 5,
  },
  paddingBottom5: {
    paddingBottom: 5,
  },
  padding3: {
    padding: 3,
  },
  padding2: {
    padding: 2,
  },
  padding1: {
    padding: 1,
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  margin10: {
    margin: 10,
  },
  pl20: {
    paddingLeft: 20,
  },
  absoluePosition: {
    position: 'absolute',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  textBoldSm: {
    fontWeight: 'bold',
    fontSize: 2,
  },
  textBoldLg: {
    fontWeight: 'bold',
    fontSize:13,
  },

  textBoldXl: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  textExtraSm: {
    fontWeight: 'normal',
    fontSize: 13,
  },
  textExtraSmBold: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  textSm: {
    fontWeight: 'normal',
    fontSize: 2,
  },
  textXl: {
    fontWeight: 'normal',
    fontSize: 13,
  },
  textMd: {
    fontWeight: 'normal',
    fontSize: 2,
  },
  textLg: {
    fontWeight: 'normal',
    fontSize:13,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt5: {
    marginTop: 5,
  },
  mt20: {
    marginTop: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb5: {
    marginBottom: 5,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  marinHor10: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  /** Input & Dropdown CSS */
  inputArea: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderBottomColor: secondaryTextColor,
  },
  input: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Poppins',
    borderRadius: 0,
    paddingLeft: 5,
    paddingVertical: 12,
    borderBottomColor: '#000',
    borderBottomWidth: 0.6,
    backgroundColor: 'white',
  },
  inputLg: {
    fontSize: 25,
    height: 30,
  },
  inputBorder: {
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputBoxStyle: {
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 8,
    backgroundColor: '#F7F9FC',
  },
  dropdownView: {
    borderWidth: 1,
    borderColor: '#eee',
  },
  /** Input & Dropdown CSS */

  /** Page Area CSS */
  pageArea: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  /** Page Area CSS */
  // header title css
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 8,
  },
  InputField: {
    height: 50,
    color: '#000',
    fontSize: 2,
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: -8,
    marginTop: 5,
    // fontWeight: 'bold',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#f6f6f6',
  },
  inputField: {
    height: 50,
    color: '#000',
    fontSize: 2,
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: 1,

    marginTop: 5,

    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageBox: {
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  InputFieldSm: {
    height: 40,
    color: '#000',
    fontSize: 2,
    borderBottomColor: '#DADADA',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },

  inputLebel: {
    fontSize: 2,

    textAlign: 'left',
    color: '#232A2F',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  dateInputLebel: {
    color: '#fff',

    alignItems: 'center',

    fontSize: 14,
  },
  textInputStyle: {
    height: 55,
    color: '#000',
    fontSize: 17,
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  selectBoxStyle: {
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#DADADA',
    justifyContent: 'center',
    height: 60,
    marginRight: 10,
  },
  dateBoxStyle: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexBasis: '44%',
    color: '#fff',
    backgroundColor: '#4687F5',
    borderRadius: 15,
    marginRight: 5,
    paddingLeft: 15,
    paddingTop: 5,
    marginTop: 10,
    height: Platform.OS === 'ios' ? 50 : 56,
  },

  multilineInputField: {
    height: 40,
    color: '#000',
    fontSize: 16,
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },

  statusApproved: {
    backgroundColor: '#B3FFD6',
    color: '#2CCC93',
    fontSize: 2,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    // paddingVertical: 3,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    paddingTop: 5,
    // marginRight: 5,
    width: '90%',
    height: 30,
    padding: 5,
  },
  statusPending: {
    backgroundColor: '#ACACAC',
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingVertical: 3,
    borderRadius: 7,
    marginRight: 5,
    width: '60%',
    height: 25,
  },
  sideBorderStyle: {
    height: '100%',
    backgroundColor: '#4687F5',
    width: '100%',
    marginRight: '3%',
  },
  buttonStyle: {
    width: '95%',
    color: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 15,
    shadowOffset: {width: 3, height: 113},
    fontSize:13,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 20,
    marginLeft: 10,
    // marginTop: 20,
    fontWeight: 'bold',
    backgroundColor: '#4687F5',
  },
  addbutton: {
    padding: 10,
    backgroundColor: '#4787F5',
    marginRight: 10,
    width: 100,
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
    borderRadius: 20,
    marginTop: 10,
  },
  statusPresent: {
    backgroundColor: '#B3FFD6',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    borderRadius: 7,
    width: '25%',
    height: 25,
    marginTop: 10,
    marginLeft: 20,
  },
  fullbg: {
    backgroundColor: '#F2F8FF',
    height: '100%',
  },
  statusPending: {
    backgroundColor: '#ACACAC',
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingVertical: 3,
    borderRadius: 7,
    marginRight: 5,
    width: '60%',
    height: 25,
  },
  iconInput: {},
  sideBorderStyle: {
    height: '100%',
    backgroundColor: '#4687F5',
    width: '100%',
    marginRight: '3%',
  },
  buttonStyle: {
    width: '95%',
    color: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 15,
    shadowOffset: {width: 3, height: 113},
    fontSize:13,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 20,
    marginLeft: 10,
    // marginTop: 20,
    fontWeight: 'bold',
    backgroundColor: '#4687F5',
    paddingTop: 15,
    paddingBottom: 15,
  },
  statusPresent: {
    backgroundColor: '#B3FFD6',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    borderRadius: 7,
    width: '25%',
    height: 25,
    marginTop: 10,
    marginLeft: 20,
  },
  fullbg: {
    backgroundColor: '#F2F8FF',
    height: '100%',
  },
  headerStyle: {
    backgroundColor: '#4787F5',
    paddingTop: 20,
    paddingBottom: 20,
    padding: 15,
    marginBottom: 5,
    textAlign: 'center',
  },

  imageContainer: {
    width: 60,
    height: 60,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  styleButtionOne: {
    backgroundColor: '#4787F5',
    color: '#fff',
    fontSize: 2,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingVertical: 10,
    borderRadius: 50,
    marginRight: 5,
    borderRadius: 30,
  },
  card: {
    backgroundColor: '#fff',

    padding: 10,
    shadowColor: '#000',
  },
  CardBox: {
    backgroundColor: '#fff',

    textAlign: 'center',

    padding: 10,
    shadowColor: '#000',
  },
  cardBox: {
    backgroundColor: '#fff',

    textAlign: 'center',

    padding: 10,
    shadowColor: '#000',
  },
  lightShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  borderBottom: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
});

export default GlobalStyles;
