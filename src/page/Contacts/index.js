import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, TouchableOpacityBase } from "react-native";

class InputExample extends Component (){
    state={
        email: '',
        password: ''
    }

    editaEmail = (text) =>{
        this.setState({email: text})
        this.setState({password: text})
    }
    
    editaPassword = (text) =>{
        this.setState({password: text})
    }

    login = (email, password) => {
        alert('Seu login é: ' + email + 'Sua senha é: ' + password)
    }
 
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Contacts</Text>
                <TextInput style = {styles.input}
                    placeholder="Email..."
                    placeholderTextColor="blue"
                    onChangeText={this.editaEmail}
                />
                <TextInput style = {styles.input}
                    placeholder="Password..."
                    placeholderTextColor="blue"
                    onChangeText={this.editaPassword}
                    secureTextEntry = {true}
                />

                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress={
                        ()=> this.login(this.state.email, this.state.password)
                    }
                >
                    <Text style = {styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default InputExample;

const styles = StyleSheet.creater({
    container:{
        paddingTop: 30
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: 'blue',
        borderWight: 1
    },

    submitButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 15,
        height: 40
    },

    submitText:{
        color: 'white'
    },
})