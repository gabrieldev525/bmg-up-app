import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import AppHeader from '../../../components/header';
import RadioOption from '../../../components/radioOption';

export default function QuizPage2() {

    const navigation = useNavigation();

    function navigateToPage3() {
        navigation.navigate('QuizPage3', { answer: true });
    }

    return (
        <>
            <AppHeader />
            <View style={styles.container}>
                <Text style={styles.paragraph}>Investimentos são aplicações que aumentam a quantidade investida em
                certo prazo, com uma taxa que depende do tipo de aplicação. Essas taxas podem render juros,
                remuneração ou algum tipo de correção. Exemplo: É como se você estivesse emprestando R$ 100 para
                alguém e acrescentando R$ 0,20 a cada dia que a pessoa demorar a devolver isso a você.
                </Text>
                <Text style={styles.question}>Com relação aos juros citado no exemplo, é possível dizer que:</Text>
                <RadioOption
                    text="É aplicado sempre baseado no valor total do investimento"
                    textStyle={{paddingLeft: 10}}
                />
                <RadioOption
                    text="É aplicado baseado no valor somado a cada dia"
                    textStyle={{paddingLeft: 10}}
                />
                <RadioOption
                    text="É aplicado independente do valor inicial e do prazo"
                    textStyle={{paddingLeft: 10}}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToPage3}
                >
                    <Text style={styles.textButton}>Ok</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}