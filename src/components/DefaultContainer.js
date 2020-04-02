import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../lib/util';

const DefaultContainer = props => {
    return (
        <SafeAreaView style={styles.outContainer}>
            <View
                style={{
                    ...styles.container,
                    ...props.style,
                }}>
                {props.children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(25),
    },
});

export default DefaultContainer;
