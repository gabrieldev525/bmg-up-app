import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AppHeader from '../../../components/header';
import styles from './styles';

export default function QuizPage3({ route }) {
    const navigation = useNavigation();

    const { answer } = route.params;

    function navigateToBlog() {
        navigation.navigate('QuizPage4');
    }

    function navigateToPage4() {
        navigation.navigate('QuizPage4');
    }

    function Wrong() {
        return (
            <>
                <Feather
                    name="x"
                    size={100}
                    color="#fa5858"
                />
                <Text style={styles.titleWrong}>Você errou!</Text>
                <Text style={styles.paragraph}>
                    Com base na sua interatividade e conhecimento, sugerimos que você leia esse pequeno texto para
                    compreender um pouquinho melhor sobre juros.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToBlog}
                >
                    <Text style={styles.textButton}>Visualizar blog</Text>
                </TouchableOpacity>
            </>
        );
    }

    function Right() {
        return (
            <>
                <Feather
                    name="check"
                    size={100}
                    color="#81f79f"
                />
                <Text style={styles.titleRight}>Você acertou!</Text>
                <Text style={[styles.paragraph, { paddingHorizontal: 40 }]}>
                    Parabéns, você demonstra um ótimo conhecimento do assunto!!!
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToPage4}
                >
                    <Text style={styles.textButton}>Próxima pergunta</Text>
                </TouchableOpacity>
            </>
        );
    }
    return (
        <>
            <AppHeader />
            <View style={styles.container}>
                {answer ? <Right /> : <Wrong />}
            </View>
        </>
    );
}