import React from 'react';
import {ActivityIndicator} from 'react-native';
import {APP_COLORS} from '../styleguide/Colors';

const Loading = props => (
    <ActivityIndicator
        size={props.size ? props.size : 'large'}
        color={APP_COLORS.PRIMARY_COLOR_ORANGE}
    />
);

export default Loading;
