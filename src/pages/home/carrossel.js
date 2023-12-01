import { View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
//configurando o carrossel
export default function CarouselComponent({ images }) {
	const renderItem = ({ item }) => (
		<View style={styles.item}>
			<Image source={{ uri: item }} style={styles.image} />
		</View>
	);

	return (
		<Carousel
			data={images}
			renderItem={renderItem}
			sliderWidth={350}
			itemWidth={350}
			loop
			layout="default"
		/>
	);
}

const styles = StyleSheet.create({
	item: {
		borderRadius: 5,
		overflow: "scroll",
		marginTop: 200,
		marginLeft: 25,
		marginRight: 25,
	},
	image: {
		width: "100%",
		height: 200, 
	},
});
