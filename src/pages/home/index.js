import { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native"
import Slider from "@react-native-community/slider"
import { ModalPassword } from "./components/index"
import CarouselComponent from "./carrossel"

let charset = "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKQWERTYUIOP1234567890"

export function Home(){
	const [size, setSize]=useState(10)
	const [passwordValue, setPasswordValue] = useState("")
	const [modalVisible, setModalVisible] = useState(false);

    const carouselImages = [
        "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg",
        "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://cdn.pixabay.com/photo/2017/04/09/16/11/guitar-2216068_1280.jpg"
        // Adicione mais URLs de imagens conforme necessário
        
    ];

	function generatePassword(){
		
		let password= "";
		for(let i=0, n = charset.length; i<size; i++){
			password+=charset.charAt(Math.floor(Math.random() * n))
		}

		setPasswordValue(password)
		setModalVisible(true)
	}

	


	return(
		<View style={styles.container}> 
			{/*<Image
			    source={require("../../assets/icon6.png")}
				style={styles.logo}
			/>*/}
			<View style={{marginTop: 14, flex: 1}}>
            	<CarouselComponent  images={carouselImages} />
			</View>
			<Text style={styles.title}>{size} caracteres</Text>
			<View style={styles.area}>
				<Slider
					style={{height: 50}}
					minimumValue={6}
					maximumValue={20}
					maximumTrackTintColor="#ff0000"
					minimumTrackTintColor="#000"
					thumbTintColor="#392de9"
					value={size}
					onValueChange={(value)=>setSize(value.toFixed(0))}
				/>

			</View>
			<TouchableOpacity style={styles.button} onPress={generatePassword}>
				<Text style={styles.buttonText}>Gerar Senha</Text>
			</TouchableOpacity>

			<Modal visible={modalVisible} animationType="fade" transparent={true}>
				<ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
			</Modal>

		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: "#F3F3FF",
		justifyContent:'center',
		alignItems: 'center'
	},
	logo:{
        maxHeight: 80,
		marginBottom: 10,
        resizeMode: "center"
	},
	area:{
		marginTop: 14,
		marginBottom: 14,
		width: "80%",
		backgroundColor: "#FFF",
		borderRadius: 8,
		padding: 8
	},
	title:{
		fontSize: 30,
		fontWeight: 'bold'

	},
	button:{
		backgroundColor: "#780c02",
		width: "70%",
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},
	buttonText:{
		color: "#FFF",
		fontSize: 20,
	},
	header:{
        backgroundColor: '#780c02',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
	
})