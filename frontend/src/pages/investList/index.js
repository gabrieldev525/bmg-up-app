import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

export default function InvestList() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Initial')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity
          style={styles.button}
          onPress={navigateToHome}
        >
          <Feather
            name="chevron-left"
            size={28}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.content}>
        <Text style={styles.value}>R$1.659,85</Text>
        <Text style={styles.balance}>Saldo disponível</Text>
        <View style={styles.addGoalsContainer}>
          <Text style={styles.goalText}>Meus investimentos</Text>
          <Feather.Button
            name="plus"
            size={28}
            backgroundColor='transparent'
            color='black'
            onPress={() => {
              navigation.navigate('Simulation')
            }}
            style={{ padding: 0 }}
          />
        </View>

          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
              <TouchableOpacity
                style={styles.goalContainer}
                onPress={() => {
                  navigation.navigate('InvestDetail')
                }}>
                <View style={styles.descriptionContainer}>
                  <Text>Tesouro prefixado 2026</Text>
                </View>
                <View style={styles.valueGoal}>
                  <Text style={styles.textValueGoal}>R$ 16.000,00</Text>
                  <Feather
                    name="chevron-right"
                    size={28}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}