import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const users = await AsyncStorage.getItem('users');
      const parsedUsers = JSON.parse(users) || [];

      const user = parsedUsers.find((u) => u.email === email && u.password === password);

      if (user) {
        // Usuário autenticado, salva o token e redireciona para a tela principal
        await AsyncStorage.setItem('userToken', 'token_do_usuario');
        navigation.navigate('hometabs');
      } else {
        // Usuário não autenticado
        Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      Alert.alert('Erro', 'Ocorreu um erro durante o login. Tente novamente.');
    }
  };

  const handleRegister = async () => {
    try {
      const users = await AsyncStorage.getItem('users');
      const parsedUsers = JSON.parse(users) || [];

      // Verifica se o usuário já existe
      if (parsedUsers.some((u) => u.email === email)) {
        Alert.alert('Erro', 'Este email já está cadastrado.');
      } else {
        // Cadastra o novo usuário
        const newUser = { email, password };
        parsedUsers.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(parsedUsers));

        // Simula o login do novo usuário
        await AsyncStorage.setItem('userToken', 'token_do_usuario');
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('hometabs');
      }
    } catch (error) {
      console.error('Erro durante o cadastro:', error);
      Alert.alert('Erro', 'Ocorreu um erro durante o cadastro. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite um email'
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite a senha'
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
          <Text style={styles.buttonResgisterText}>Não possui uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#392de9",
    },    
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message:{
        fontSize: 28,
        fontWeight:'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize:20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: "#392de9",
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        color: "#FFF",
        fontSize: 18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    buttonResgisterText:{
        color: '#a1a1a1'
    }
})