import { View, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";
import useStorage from "../../hooks/UseStorage";
import * as Clipboard from 'expo-clipboard'
//modal chamado ao gerar senha
export function ModalPassword({password, handleClose}){
    const {saveItem} = useStorage();
    //salva a senha e copia
    async function handleCopyPassord(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)

        alert("Senha salva com sucesso")
        handleClose()
    }
    //estruturação do modal
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassord}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassord}>
                        <Text>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>
            </View>

            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#000",
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    text:{
        color: "#FFF",
        textAlign: "center"
    },
    buttonArea:{
            flexDirection: "row",
            width: '90%',
            marginTop: 8,
            alignItems: 'center',
            justifyContent: 'space-between'
    },
    button:{
        flex:1,
        alignItems:'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave:{
        backgroundColor: "#392DE9",
        borderRadius: 8,

    }
})