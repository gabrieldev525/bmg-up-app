import React, { useState } from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity, 
    TextInput } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-community/picker";
import styles from './styles';
import AppHeader from '../../components/header';

export default function Form() {
    const [type, setType] = useState('Automóvel');
    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate('List')
    }

    return (
        <>
            <AppHeader />
            <SafeAreaView style={styles.container}>
                <ScrollView 
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>Criar meta</Text>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        placeholderTextColor="#999"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Valor objetivo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="R$"
                        placeholderTextColor="#999"
                        keyboardType="numbers-and-punctuation"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Tipo</Text>
                    <View style={styles.viewPicker}>
                        <Picker
                            selectedValue={type}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                setType({language: itemValue})
                            }>
                            <Picker.Item label="Automóvel" value="automóvel" />
                            <Picker.Item label="Casa" value="casa" />
                            <Picker.Item label="Computador" value="computador" />
                        </Picker>
                    </View>
                    <Text style={styles.label}>Em quantos meses você quer alcançar o valor?</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numbers-and-punctuation"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={8}
                        style={styles.textarea}
                        keyboardType="numbers-and-punctuation"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.textButton}>Gerar meta</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        </>
    );
}