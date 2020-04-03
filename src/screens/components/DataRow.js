import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleVertical} from '../../lib/util';
import {APP_COLORS} from '../../styleguide/Colors';
import {APP_STYLES} from '../../styleguide/Styles';

const DataRow = props => {
    const {nominal, name, value, onPress} = props;
    return (
        <TouchableOpacity style={styles.row} onPress={onPress}>
            <View style={styles.titleView}>
                <Text
                    style={{
                        ...APP_STYLES.TITLE_TEXT,
                        marginTop: scaleVertical(2),
                    }}>
                    {nominal}{'  '}
                </Text>
                <Text style={APP_STYLES.MAIN_TEXT}>{name}</Text>
            </View>
            <View style={styles.textView}>
                <Text style={APP_STYLES.TITLE_TEXT}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: APP_COLORS.TEXT_MUTED,
        borderBottomWidth: scaleVertical(1),
        paddingVertical: scaleVertical(10),
    },
    titleView: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textView: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export default DataRow;
