import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import styles from './styles';

export default function ValueDetail() {
    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate('List')
    }

    return (
        <SafeAreaView style={styles.container}>
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
            <ScrollView 
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.balanceContainer}>
                    <View style={styles.balance}>
                        <Text style={styles.buyGoalText}>R$ 1.659,85</Text>
                        <Text style={styles.descriptionGoal}>Saldo disponível</Text>
                    </View>
                    <View style={styles.balance}>
                        <Text style={styles.buyGoalText}>R$ 760,00</Text>
                        <Text style={styles.descriptionGoal}>Saldo guardado</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.orangeButton}>
                    <View style={styles.iconContainer}>
                        <FontAwesome 
                            name="dollar"
                            size={20}
                        />
                        <Text style={styles.textButton}>Guardar Dinheiro</Text>
                    </View>
                    <Feather
                        name="chevron-right"
                        size={28}
                        color="#fff"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Histórico de depósitos mensais</Text>
                <View style={styles.chart}>

                </View>
                <Text style={styles.title}>Registro de transações</Text>
                <FlatList 
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={incident => String(incident)}
                    showsVerticalScrollIndicator={false}
                    style={styles.flatList}
                    renderItem={() => (
                        <View style={styles.registerContainer}>
                            <View style={styles.descriptionContainer}>
                                <FontAwesome 
                                name="dollar"
                                size={20}
                                />
                                <Text style={styles.registerValue}>Depositou R$360,00</Text>
                            </View>
                            <Text style={styles.date}>14/08</Text>
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}