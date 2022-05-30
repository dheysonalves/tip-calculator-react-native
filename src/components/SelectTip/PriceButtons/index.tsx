import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

interface PriceButtonsInterface {
	pricesData: {
		value: string;
	}[];
}

const PriceButtons = ({ pricesData }: PriceButtonsInterface) => {
	return (
		<View style={styles.container}>
			{pricesData.map((item, index) => {
				return (
					<Pressable
						key={String(index)}
						onPress={() => {
							console.log(Number(item.value) / 100);
						}}
						style={styles.buttonStyle}>
						<Text style={styles.buttonText}>{item.value}%</Text>
					</Pressable>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: 'wrap',
	},
	buttonStyle: {
		backgroundColor: "hsl(183, 100%, 15%)",
		borderRadius: 5,
		padding: 10,
		width: 180,
		marginBottom: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 24,
		fontWeight: '700',
		textAlign: 'center'
	},
	title: {
		color: "hsl(184, 14%, 56%)",
		fontWeight: "700",
		letterSpacing: 0.6,
		fontSize: 18,
		marginVertical: 4,
	},
});


export default PriceButtons;
