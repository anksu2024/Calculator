/**
 * Simple Calculator App
 * @author: Ankit Sarraf
 * @dated: May 06, 2019
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Alert} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.onPressFunction = this.onPressFunction.bind(this);
        this.state = {
            expression: "",
            result: "0"
        }
    }

    onPressFunction(val) {
        var myExpression = "";
        switch(val) {
            case "=":
                myExpression = this.state.expression;
                console.log(myExpression);
                const myEvaluatedExpression = String(eval(
                    myExpression.replace(/÷/g, "/").replace(/x/g, "*")));
                this.setState({
                    expression: myEvaluatedExpression,
                    result: myEvaluatedExpression
                })
                break;
            case "AC":
                this.setState({
                    expression: "",
                    result: "0"
                })
                break;
            case "C":
                myExpression = this.state.expression.slice(0, -1);
                this.setState({
                    expression: myExpression
                })
                break;
            default:
                myExpression = this.state.expression.concat(val);
                console.log(myExpression);
                this.setState({
                    expression: myExpression
                })
        }
    }

    render() {
        numbers = [[7, 4, 1, "."], [8, 5, 2, 0], [9, 6, 3, "="]];
        var final_number_items = [];

        for(let i = 0 ; i < 3 ; i++) {
            var number_items = [];

            for(let j = 0 ; j < 4 ; j++) {
                number_items.push(
                    <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction.bind(
                        this, String(numbers[i][j]))}>
                        <Text style={styles.numbers_font}>{numbers[i][j]}</Text>
                    </TouchableOpacity>
                )
            }

            final_number_items.push(
                <View style={styles.numbers}>
                    {number_items}
                </View>
            )
        }

        operations = ["AC", "C", "+", "-", "x", "÷"];
        var final_operations_items = [];
        var operations_items = []
        for(let k = 0 ; k < 6 ; k++) {
            operations_items.push(
                <TouchableOpacity style={styles.buttons} onPress={this.onPressFunction.bind(
                    this, operations[k])}>
                    <Text style={styles.numbers_font}>{operations[k]}</Text>
                </TouchableOpacity>
            )
        }

        final_operations_items.push(
            <View style={styles.operations}>
                {operations_items}
            </View>
        )

        return (
          <View style={styles.container}>
                <View style={styles.app_title}>
                    <Text style={{fontSize: 25}}>Calculator</Text>
                </View>
                <View style={styles.expression}>
                    <Text style={{fontSize: 30}}>{this.state.expression}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={{fontSize: 60}}>{this.state.result}</Text>
                </View>
                <View style={styles.calc_pad}>
                    {final_number_items}
                    {final_operations_items}
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
