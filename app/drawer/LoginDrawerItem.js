import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from '../views/login/LoginScreen';

const ProfileDrawerItem = StackNavigator({
    Playground: { screen: LoginScreen }
  }
);

ProfileDrawerItem.navigationOptions = {
  drawerLabel: 'LoginDrawerItem',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="account-box"
      size={20}
      iconStyle={{width: 20, height: 20 }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ProfileDrawerItem;
