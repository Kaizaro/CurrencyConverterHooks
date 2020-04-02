import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import Loading from './components/Loading';

export let {width, height} = Dimensions.get('window');

export default class Init extends Component {
    componentDidMount() {
        this._handleOrientation();
        setTimeout(() => {
            this.props.navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'MainStack',
                    },
                ],
            });
        }, 3000);
    }

    _handleOrientation = () => {
        Dimensions.addEventListener('change', ({window, screen}) => {
            console.log(window.width, window.height);
            width = window.width;
            height = window.height;
            console.log('\n\n\nafter listener', width, height);
        });
    };

    componentWillUnmount() {
        Dimensions.removeEventListener('change');
    }

    render() {
        console.log('\n\nwidth', width);
        console.log('\n\nheight', height);
        return (
            <View style={styles.container}>
                <Loading />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
