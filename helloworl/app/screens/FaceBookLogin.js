import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FacebookImg from '../assets/facebookimage.jpg';
const FaceBookLogin = () => {
  return (
    <>
      <Image
        source={FacebookImg}
        style={{
          width: '100%',
          height: null,
          aspectRatio: 750 / 460,
          resizeMode: 'cover',
        }}
      />
      <SafeAreaView style={styles.container}>
        {/* form login  */}
        <View style={styles.loginContanier}>
          <TextInput
            placeholder="Số điện thoại hoặc email"
            style={styles.txtUsername}
          />
          <TextInput placeholder="Mật khẩu" style={styles.txtPassword} />

          <TouchableOpacity style={styles.login}>
            <Text style={styles.txtTextLogin}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgetPass}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.back}>Quay lại</Text>
          </TouchableOpacity>
        </View>
        {/* form register */}
        <View style={styles.registerContainer}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '70%'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#000',
                flex: 1,
                height: 1,
              }}></View>
            <View>
              <Text style={{width: 70, textAlign: 'center'}}>HOẶC</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#000',
                flex: 1,
                height: 1,
              }}></View>
          </View>

          <TouchableOpacity style={styles.register}>
            <Text style={styles.textRegister}>Tạo tài khoản mới</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FaceBookLogin;
const styleInput = {
  borderColor: 'gray',
  borderWidth: 1,
  marginHorizontal: 15,
  width: '90%',
  borderRadius: 3,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txtUsername: {
    ...styleInput,
  },
  txtPassword: {
    ...styleInput,
    marginTop: 2,
  },
  loginContanier: {
    marginTop: 10,
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#1977F3',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 4,
    width: '70%',
    marginTop: 5,
  },
  txtTextLogin: {
    textAlign: 'center',
    color: '#fff',
  },
  forgetPass: {
    color: '#1977F3',
    marginTop: 15,
    fontSize: 18,
  },
  back: {
    color: '#1977F3',
    marginTop: 15,
    fontSize: 18,
  },
  registerContainer: {
    alignItems: 'center',
  },
  register: {
    backgroundColor: '#D3E3F5',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 4,
    width: '70%',
    marginTop: 5,
  },
  textRegister: {
    textAlign: 'center',
    color: '#1977F3',
  },
});
