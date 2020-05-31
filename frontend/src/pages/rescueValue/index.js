import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles';

export default function RescueValue() {
  const navigation = useNavigation();

  function navigateToList() {
    navigation.navigate('List')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {}}
        >
          <Feather
            name="chevron-left"
            size={28}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Quanto você quer resgatar?</Text>
        <Text style={styles.value}>R$ 0,00</Text>
        <Text style={styles.balance}>Saldo disponível: R$ 16.000,00</Text>
        <View style={styles.viewOrangeButton}>
          <TouchableOpacity style={styles.orangeButton} onPress={navigateToList}>
            <Text style={styles.textOrangeButton}>Resgatar dinheiro</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}