/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 * @author: Ankit Sarraf
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Alert} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  onPressFunction() {
    Alert.alert("Button 7 Pressed")
  }

  render() {
    return (
      <View style={styles.container}>
            <View style={styles.app_title}>
                <Text style={{fontSize: 25}}>Calculator</Text>
            </View>
            <View style={styles.expression}>
                <Text style={{fontSize: 30}}>expression</Text>
            </View>
            <View style={styles.result}>
                <Text style={{fontSize: 35}}>result</Text>
            </View>
            <View style={styles.calc_pad}>
                <View style={styles.numbers}>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.numbers}>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numbers}>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>=</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.operations}>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>DEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction}>
                        <Text style={styles.numbers_font}>÷</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    app_title: {
        flex: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#6DE3BD'
    },
    expression: {
        flex: 0.5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    result: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF'
    },
    calc_pad: {
        flex: 4,
        flexDirection: 'row'
    },
    numbers: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2D2D2D',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    numbers_font: {
        color: '#3279FF',
        fontSize: 20
    },
    operations: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#E1E1E1'
    }
});
