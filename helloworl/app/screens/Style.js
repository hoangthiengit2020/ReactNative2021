import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  header: {
    backgroundColor: '#0055A8',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  content: {
    // backgroundColor: 'red',
    paddingHorizontal: 10,
  },
  formGroup: {},

  lblInput: {
    fontSize: 15,
    textTransform: 'capitalize',
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    borderColor: '#888',
    marginTop: 5,
    fontSize: 15,
  },
  // button: {
  //   backgroundColor: '#0055A8',
  //   paddingHorizontal: 10,
  //   paddingVertical: 10,
  //   marginTop: 10,
  //   borderRadius: 3,
  //   width: '70%',
  //   marginBottom: 10,
  // },
  button: {
    marginTop: 15,
    backgroundColor: '#0055A8',
    padding: 15,
    borderRadius: 15,
  },
  error: {
    color: 'red',
    fontWeight: '100',
  },
});
export {styles};
