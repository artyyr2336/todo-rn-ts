import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  todoContainer: {
    padding: RFValue(20),
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: width - 40,
  },
  deleteBtn: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 50,
  },
});
