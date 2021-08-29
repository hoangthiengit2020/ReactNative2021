import React, {useState} from 'react';
//Icons
import IconAnt from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
const LoginMomo = () => {
  const [stateShowHidePass, setShowHidePass] = useState({
    icon: 'eye-off',
    password: true,
  });
  const handleChangeIcon = () => {
    setShowHidePass({
      icon: stateShowHidePass.icon === 'eye' ? 'eye-off' : 'eye',
      password: !stateShowHidePass.password,
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAvoidingView
        style={{flex: 1, justifyContent: 'center'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.content}>
              <Text style={styles.textContent}>Xin chào🎉</Text>
              <Text style={styles.name}>hoàng văn thiện</Text>
              <Text style={styles.phone}>0948820369</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.groupInput}>
                <IconAnt
                  name="lock"
                  size={30}
                  color="#a51f68"
                  style={{marginLeft: 15}}
                />
                <TextInput
                  style={styles.inputPassWord}
                  secureTextEntry={stateShowHidePass.password}
                  placeholder="Password"
                  placeholderTextColor="#666"
                  autoFocus={true}
                  keyboardType="numeric"
                />
                <IconAnt
                  name={stateShowHidePass.icon}
                  size={20}
                  color="black"
                  style={styles.eyes}
                  onPress={handleChangeIcon}
                />
              </View>

              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity>
                <Text style={styles.txtForget}>QUÊN MẬT KHẨU</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txtAccount}>THOÁT TÀI KHOẢN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginMomo;

const styleText = {
  color: '#fff',
  textAlign: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a51f68',
    paddingTop: StatusBar.currentHeight,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    ...styleText,
    fontSize: 35,
  },
  name: {
    ...styleText,
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '100',
  },
  phone: {
    ...styleText,
    fontSize: 25,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  groupInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    justifyContent: 'space-around',
    paddingLeft: 5,
    position: 'relative',
  },
  eyes: {
    // position: 'absolute',
    // right: 20,
    // top: 10,
    marginRight: 15,
  },
  inputPassWord: {
    // backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    marginLeft: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  btnLogin: {
    backgroundColor: '#d91a6b',
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textLogin: {
    ...styleText,
    fontSize: 20,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: StatusBar.currentHeight,
  },
  txtForget: {
    ...styleText,
  },
  txtAccount: {
    ...styleText,
  },
});
