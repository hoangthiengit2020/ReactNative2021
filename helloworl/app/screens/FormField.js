import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './Style.js';
const FormField = ({
  field,
  autoCapitalize,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  label,
}) => {
  return (
    <View styles={styles.formGroup}>
      <Text style={styles.lblInput}>{label}</Text>
      <TextInput
        name={field}
        style={styles.txtInput}
        placeholder=""
        autoCapitalize={autoCapitalize || 'none'}
        // onChangeText={value => handleChange('firtname', value)}
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        value={values[field]}
      />
      {errors[field] && touched[field] ? (
        <Text style={styles.error}>{errors[field]}</Text>
      ) : null}
    </View>
  );
};

export default FormField;
