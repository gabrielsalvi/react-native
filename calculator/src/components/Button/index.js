import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export default (props) => {
    const stylesButton = [styles.button]

    if (props.operator) stylesButton.push(styles.operationButton);
    if (props.clear) stylesButton.push(styles.clearButton);

    return (
        <Pressable 
            style={stylesButton}
            onPress={() => props.onPress(props.label)}
        >
            <Text style={styles.symbol}>{props.label}</Text>
        </Pressable>
    )
}