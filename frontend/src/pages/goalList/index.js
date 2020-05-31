import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import AppHeader from '../../components/header';
import styles from './styles';

export default function GoalList() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Initial')
  }
  
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>
        <Text style={styles.value}>R$1.659,85</Text>
        <Text style={styles.balance}>Saldo disponível</Text>
        <View style={styles.addGoalsContainer}>
          <Text style={styles.goalText}>Metas</Text>
          <Feather
            name="plus"
            size={28}
          />
        </View>

        <FlatList 
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={incident => String(incident)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.goalContainer}>
              <FontAwesome
                  name="car"
                  size={28}
                  color="#ccc"
                />
              <View style={styles.descriptionContainer}>
                <Text style={styles.buyGoalText}>Comprar carro</Text>
                <Text style={styles.descriptionGoal}>Descrição sobre...</Text>
              </View>
              <View style={styles.valueGoal}>
                <Text style={styles.textValueGoal}>R$ 16.000,00</Text>
                <Feather
                  name="chevron-right"
                  size={28}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}