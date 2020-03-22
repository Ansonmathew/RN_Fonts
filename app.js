/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const App: () => React$Node = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle= {styles.scrollView}>
            
            <View style= {styles.sectionContainer}>
                {/* title */}
                <Text style= {styles.title}>Section Title</Text>
                 {/* edit */}
                <Text style= {styles.edit}>edit</Text>
            </View>

            {/* description */}
            <Text style= {styles.description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text> 
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    sectionContainer: {
        flexDirection: 'row',
        marginTop: 32,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    description: {
        padding: 16,
        fontSize: 16,
        fontFamily: 'FiraSans-Regular'
    },
    title: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'FiraSans-Bold'
    },
    edit: {
        fontSize: 16,
        fontFamily: 'FiraSans-Medium',
        color: '#999999'
    }
});

export default App;
c
