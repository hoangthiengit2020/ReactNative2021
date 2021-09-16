import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Container} from './Container';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import WavyHeader from './WavyHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.18;

const SignIn = () => {
  const [data, setData] = useState({
    email: '',
    passWord: '',
    check_textInputChange: false,
    check_textInputChangePass: false,
    secureTextEntry: true,
  });
  const textInputChange = val => {
    console.log(val.length);
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChande: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChande: false,
      });
    }
  };
  const textInputChangePass = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        passWord: val,
        check_textInputChangePass: true,
      });
    } else {
      setData({
        ...data,
        passWord: val,
        check_textInputChangePass: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8B40E8" barStyle="light-content" />
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/logoBH.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>QUY HOẠCH XÂY DỰNG</Text>
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={250}>
        <Animatable.View name="fadeIn" duration={1500} style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#8B40E8" size={20} />
            <TextInput
              placeholder="Email"
              n
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Feather name="check-circle" size={20} color="blue" />
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#8B40E8" size={20} />
            <TextInput
              placeholder="Password"
              n
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={val => textInputChangePass(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.check_textInputChangePass ? (
                <Feather
                  name={data.secureTextEntry ? 'eye-off' : 'eye'}
                  size={20}
                  color="blue"
                />
              ) : null}
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <View style={styles.button}>
          <LinearGradient colors={['#8B40E8', '#6000D2']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>ĐĂNG NHẬP</Text>
          </LinearGradient>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    flex: 2,
    marginTop: 20,
    marginHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
  },

  footer: {
    flex: 1,
    backgroundColor: '#fff',

    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#8B40E8',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
