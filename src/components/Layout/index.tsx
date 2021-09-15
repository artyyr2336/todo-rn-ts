import React, {ReactChild} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';

interface ILayoutProprs {
  children: ReactChild;
}

export const Layout = ({children}: ILayoutProprs) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {children}
    </ScrollView>
  );
};
