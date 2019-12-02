import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MenuButton extends React.Component {

  drawerMenu = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <Ionicons
        name="md-menu"
        color='black'
        size={32}
        style={styles.menuIcon}
        onPress={this.props.drawerMenu}
      />
    )
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: 'absolute',
    top: 40,
    left: 20
  }
})
