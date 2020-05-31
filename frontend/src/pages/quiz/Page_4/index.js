import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AppHeader from '../../../components/header';
import styles from './styles';

export default function QuizPage4() {
    const navigation = useNavigation();

     function navigateToPage1() {
        navigation.navigate('QuizPage1');
     }
    return (
        <>
            <AppHeader />
            <View style={styles.container}>
                <Feather
                    name="smile"
                    size={100}
                    color="#fe9a2e"
                />
                <Text style={styles.title}>Parabéns!</Text>
                <Text style={styles.paragraph}>
                    Está bom por hoje? Conheça histórias de pessoas que podem ser parecidas com você.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToPage1}
                >
                    <Text style={styles.textButton}>Visualizar blog</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}