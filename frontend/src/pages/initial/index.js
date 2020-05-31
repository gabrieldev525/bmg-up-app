import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList, 
  TextInput,
  ScrollView } from 'react-native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Initial() {
  const navigation = useNavigation();

  const categoria = [
        {id: '1', name: 'Simular investimentos'},
        {id: '2', name: 'Gerenciar saldo'},
        {id: '3', name: 'Negociação de dívida'},
        {id: '4', name: 'Gerenciar saldo'},
    ]

  function navigateToList() {
    navigation.navigate('List')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textHeader}>
          <Text style={styles.value}>R$1.659,85</Text>
          <Text style={styles.balance}>Saldo disponível</Text>
        </View>
        <Feather
          name="user"
          size={40}
          color="white"
        />
      </View>

      <View style={styles.bankAccount}>
        <View style={styles.dollarDescription}>
          <FontAwesome
            name="dollar"
            size={30}
            color="white"
          />
          <View style={styles.accountDescription}>
            <Text style={styles.balance}>dinheiro guardado</Text>
            <Text style={styles.balance}>R$ 16.000,95</Text>
          </View>
        </View>
        <Feather
          name="chevron-right"
          size={28}
          color="white"
        />
      </View>


      <View style={styles.bodyContent}>
        <View style={styles.headerContent}>
          <Text style={styles.textHeaderContent}>Conteúdo do dia</Text>
          <TouchableOpacity>
            <Text style={styles.textBlogButton}>Visitar blog</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContent}>
          <MaterialIcons 
            name="image"
            size={50}
          />
          <View style={styles.textSubContent}>
            <Text style={styles.titleSubContent}>Aprenda sobre o tesouro selic</Text>
            <Text style={styles.descriptionSubContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <TouchableOpacity>
              <Text style={styles.textBlogButton}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={[styles.textHeaderContent, { paddingBottom: 20 }]}>Serviços</Text>

        <FlatList
            numColumns={2}
            data={categoria}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.options}
                >
                  <FontAwesome
                    name="dollar"
                    size={30}
                    color='#fe9a2e'
                  />
                  <Text style={styles.titleOptions}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />

        <View>
          <Text style={styles.textHeaderContent}>Precisa de Ajuda?</Text>
          <Text>Converse com a duda? ela irá lhe ajudar!</Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.searchInput} 
                placeholder="Digite sua dúvida"
                placeholderTextColor="#999"
                autoCapitalize='words'
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.loadButton}>
                <MaterialIcons name="input" size={20} color='#000' />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}