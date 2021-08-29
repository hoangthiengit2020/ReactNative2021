import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Formik} from 'formik';
import {SignupSchema} from '../validate/validate';

// styleSheet
import {styles} from './Style';
import FormField from './FormField';

const FormRegister = () => {
  // const [inforValue, setInforValue] = useState({firtname: '', lastname: ''});
  // const handleChange = (name, value) => {
  //   console.log(name, value);
  //   setInforValue({
  //     ...inforValue,
  //     [name]: value,
  //   });
  // };

  const isFormValid = (isValid, touched) => {
    return isValid && Object.keys(touched).length !== 0;
  };
  const handleSubmitForm = values => {
    Alert.alert('Thông báo', 'Dữ liệu đã nhập:' + JSON.stringify(values));
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'Ask me later',
    //     onPress: () => console.log('Ask me later pressed'),
    //   },
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
  };

  return (
    <>
      <KeyboardAwareScrollView
        extraScrollHeight={250}
        style={styles.Container}
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            opacity: 0.6,
            width: 200,
            height: 200,
            position: 'absolute',
            top: -60,
            left: -90,
            zIndex: 2,
            backgroundColor: 'orange',
            borderRadius: 100,
          }}></View>
        <View
          style={{
            opacity: 0.6,
            width: 300,
            height: 300,
            position: 'absolute',
            top: -200,
            left: -60,
            zIndex: 2,
            backgroundColor: 'pink',
            borderRadius: 150,
          }}></View>
        <View
          style={{
            opacity: 0.6,
            width: 300,
            height: 300,
            position: 'absolute',
            top: -250,
            left: -60,
            zIndex: 3,
            backgroundColor: 'red',
            borderRadius: 150,
          }}></View>
        <View style={styles.header}>
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              textAlign: 'center',
              fontFamily: 'Seaside',
            }}>
            Register
          </Text>
        </View>
        <View style={styles.content}>
          <Formik
            initialValues={{
              firtsName: '',
              lastName: '',
              email: '',
              numberPhone: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmitForm}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <FormField
                  field="firtsName"
                  label="firtsName"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormField
                  field="lastName"
                  label="lastName"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormField
                  field="email"
                  label="email"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormField
                  field="numberPhone"
                  label="numberPhone"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <View styles={styles.formGroup}>
                  <Text style={styles.lblInput}>Password</Text>
                  <TextInput
                    style={styles.txtInput}
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}
                </View>
                <View styles={styles.formGroup}>
                  <Text style={styles.lblInput}>Re-password</Text>
                  <TextInput
                    style={styles.txtInput}
                    placeholder=""
                    secureTextEntry={true}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Text style={styles.error}>
                      {errors['confirmPassword']}
                    </Text>
                  ) : null}
                </View>
                {/* <View style={{alignItems: 'center'}}> */}
                <TouchableOpacity
                  // style={[styles.button]}
                  disabled={!isFormValid(isValid, touched)}
                  onPress={handleSubmit}>
                  <View
                    style={[
                      styles.button,
                      {opacity: isFormValid(isValid, touched) ? 1 : 0.5},
                    ]}>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      SUBMIT
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    disabled={!isFormVavid(isValid, touched)}
                    onPress={handleSubmit}>
                    <View
                      style={[
                        styles.button,
                        {
                          opacity: isFormVavid(isValid, touched) ? 1 : 0.5,
                        },
                      ]}>
                      <Text style={styles.buttonText}>SUBMIT</Text>
                    </View>
                  </TouchableOpacity> */}
                {/* </View> */}
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default FormRegister;
