import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../components/header';
import styles from './styles';

import RadioOption from '../../../components/radioOption';

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
                <View style={styles.radioButton}>
                    <RadioOption 
                        text="Iniciante: Não sabe sore nenhum tipo de investimento e/ou já deixou seu dinheiro em poupança."
                        textStyle={{paddingLeft: 10}}
                    />
                    <RadioOption 
                        text="Intermediário: Tem conhecimento sobre CDI e CDB e investimentos mais sofisticados."
                        textStyle={{paddingLeft: 10}}
                    />
                    <RadioOption 
                        text="Avançado: Já tem um alto grau de conhecimento de investimentos, como a bolsa de valores e outros."
                        textStyle={{paddingLeft: 10}}
                    />
                </View>
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