import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from "@react-native-clipboard/clipboard"; // Importe a biblioteca Clipboard
//estruturação de cada item da flatlist de senhas
export function PasswordItem({ data, removePassword }) {
	//função de teste do icone para copiar (ainda não funciona)
	const handleCopyPassword = async () => {
		try {
			Clipboard.setString('picles');
			Alert.alert('Senha copiada com sucesso')
		} catch (error) {
			console.error('Erro ao copiar senha:', error);
		}
	};
	//apaga a senha ao segurar o toque
	return (
		<Pressable onLongPress={removePassword} style={styles.container}>
			<Text style={styles.text}>{data}</Text>
			<Pressable onPress={handleCopyPassword} style={styles.copyButton}>
				<Icon name="copy" size={20} color="#FFF" />
			</Pressable>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0e0e0e",
		padding: 14,
		width: "100%",
		marginBottom: 14,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	text: {
		color: "#FFF",
	},
	copyButton: {
		padding: 8,
	},
});
