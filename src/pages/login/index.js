import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const authService = {
    users: [],//armazena os usuários
    authenticate: async (email, password) => {//verifica se o usuário existe no array
      	const user = authService.users.find((u) => u.email === email && u.password === password);
    	return user
      	? { success: true, token: 'fakeAuthToken' }
      	: { success: false, message: 'Credenciais inválidas' };
  	},
  	register: async (email, password) => {//busca se o usuário já existe, se não, cria um novo
    	const existingUser = authService.users.find((u) => u.email === email);

    	if (existingUser) {
    		  return { success: false, message: 'Este email já está cadastrado.' };
    	}

    	const newUser = { email, password };
		authService.users.push(newUser);
    
    	return { success: true, message: 'Usuário cadastrado com sucesso!' };
  	},
};	

export function Login() {
  	const navigation = useNavigation();
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');

  	const handleLogin = async () => {
    	try {
      		const result = await authService.authenticate(email, password);

      		if (result.success) {
        	// Usuário autenticado com sucesso, salva o token e redireciona para a tela principal
        	Alert.alert('Sucesso', 'Usuário autenticado com sucesso!');
        	navigation.navigate('hometabs');
      	} else {
        	// Usuário não autenticado
        	Alert.alert('Erro', result.message);
     	}
    	} catch (error) {
      	console.error('Erro durante o login:', error);
      	Alert.alert('Erro', 'Ocorreu um erro durante o login. Tente novamente.');
    	}
  	};

  	const handleRegister = async () => {

		

    	try {
			if (!email || !password) {
			  // Se o email ou senha estiverem vazios, exibe uma mensagem de erro
			  Alert.alert('Erro', 'Por favor, preencha todos os campos.');
			  return;
			}
		
			const result = await authService.register(email, password);
		
			if (result.success) {
			  // Usuário registrado com sucesso
			  Alert.alert('Sucesso', result.message);
			  navigation.navigate('hometabs');
			} else {
			  // Falha no registro
			  Alert.alert('Erro', result.message);
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
        	<Text style={styles.title}>Usuário</Text>
        	<TextInput
          		placeholder='Digite o nome do usuário'
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
        backgroundColor: "#780c02",
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
        backgroundColor: "#780c02",
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