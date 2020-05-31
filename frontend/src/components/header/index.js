import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function AppHeader() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Initial')
    }
    
    return(
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
    );
}
