import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import RadioButton from '../radioButton';

export default function RadioOption(props) {
    const [select, setSelect] = useState(false);
    return (
        <View style={[{
            flexDirection: "row",
            paddingBottom: 10,
        }, props.style]}>
            <TouchableOpacity onPress={() => setSelect(!select)}>
                <RadioButton selected={select} />
            </TouchableOpacity>
            <Text style={[{
                marginLeft: 20,
            }], props.textStyle}>
                {props.text}
            </Text>
        </View>
    );
}