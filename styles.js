import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    icons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12.5%',
        flexGrow: 1,
    },

    socialIcons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    image: {
        flex: 2,
        resizeMode: 'cover',
    },

    flipCard: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flipCard2: {
        backgroundColor: '#F5F5F5',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousel: {
        backgroundColor: '#F5F5F5',
        alignContent: 'center',
        height: Dimensions.get('window').height,
    },
    list: {
        margin: 10,
    },
})


module.exports = styles