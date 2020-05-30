import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Initial() {
  const navigation = useNavigation();

  function navigateToList() {
    navigation.navigate('List')
  }

  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToList}>
        <Text>Botão para lista</Text>
      </TouchableOpacity>
    </View>
  );
}