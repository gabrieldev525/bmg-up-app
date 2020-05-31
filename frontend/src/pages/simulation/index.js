import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList, TextInput, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

export default function Simulation() {
    const [clicked, setClick] = useState(false);
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Initial')
    }

    function Simulate() {
        return(
            <View style={styles.investimentSimulateContainer}>
                    <View style={styles.simulateText}>
                        <Text style={styles.investimentName}>Tesouro Selic</Text>
                        <View style={styles.textSimulateContainer}>
                            <Text style={styles.rate}>3% a.a</Text>
                            <Text style={styles.profitability}>Rentabilidade</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>Valor para simular (R$)</Text>
                    <TextInput 
                        style={styles.input} 
                        keyboardType="numbers-and-punctuation"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Quantidade de meses</Text>
                    <TextInput 
                        style={styles.input} 
                        keyboardType="number-pad"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Simular</Text>
                        </TouchableOpacity>

                    </View>
            </View>
        );
    }

    function EmptyBox() {
        return(
            <View style={styles.emptyBox}>
                <Text style={styles.textBox}>Selecione ou arraste o investimento que você queira simular</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={navigateToHome}
                >
                    <Feather
                        name="chevron-left"
                        size={28}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} scrollsToTop={clicked} >       
                <View style={styles.content}>
                    <Text style={styles.title}>Simular investimentos</Text>
                    {clicked ? <Simulate /> : <EmptyBox />}
                    <Text style={styles.title}>Investimentos</Text>
                    <View style={styles.listOfInvestiments}>
                        <TouchableOpacity style={styles.investmentTextButton}>
                            <Text style={styles.investmentText}>Tesouro direto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.investmentTextButton}>
                            <Text style={styles.investmentText}>Ações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.investmentTextButton}>
                            <Text style={styles.investmentText}>Renda Fixa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.investmentTextButton}>
                            <Text style={styles.investmentText}>Fundos de investimento</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList 
                        data={[1, 2, 3, 4, 5, 6]}
                        keyExtractor={incident => String(incident)}
                        showsVerticalScrollIndicator={false}
                        renderItem={() => (
                            <TouchableOpacity onPress={() => {
                                setClick(!clicked)
                                console.log(clicked)
                            }}>
                                <View style={styles.investimentContainer}>
                                    <Text style={styles.investimentName}>Tesouro Selic</Text>
                                    <View style={styles.moveContainer}>
                                        <View style={styles.descriptionContainer}>
                                            <Text style={styles.rate}>3% a.a</Text>
                                            <Text style={styles.profitability}>Rentabilidade</Text>
                                        </View>
                                        <Feather
                                            name="move"
                                            size={28}
                                            color="#ccc"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}