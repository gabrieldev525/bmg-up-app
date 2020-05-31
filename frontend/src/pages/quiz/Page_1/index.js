import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../components/header';
import styles from './styles';

export default function QuizPage1() {
    const navigation = useNavigation();

     function navigateToPage2() {
        navigation.navigate('QuizPage2');
     }
    return (
        <>
            <AppHeader />
            <View style={styles.container}>
                <Text style={styles.title}>Vamos descobrir qual o seu conhecimento sobre investimento?</Text>
                <Text style={styles.paragraph}>Analisando o seu perfil, vamos te apresentar pequenos exemplos com algumas definições. 
                    Tudo de forma intuitiva.
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={navigateToPage2}
                >
                    <Text style={styles.textButton}>Ok</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}