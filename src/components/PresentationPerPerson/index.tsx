import React from "react";
import { Button, TouchableOpacity, Text, View, StyleSheet, Pressable } from "react-native";

const PresentationPerPerson = () => {
	return (
		<View style={styles.container}>
			<View style={styles.wrapperFlex}>
				<View>
					<Text style={styles.title}>Tip Amount</Text>
					<Text style={styles.subtitle}>/ person</Text>
				</View>
				<Text style={styles.valueText}>$4.27</Text>
			</View>
			<View style={styles.wrapperFlex}>
				<View>
					<Text style={styles.title}>Total</Text>
					<Text style={styles.subtitle}>/ person</Text>
				</View>
				<Text style={styles.valueText}>$32.79</Text>
			</View>
			<Pressable style={styles.buttonContainer}>
				<Text style={styles.buttonText}>RESET</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "hsl(183, 100%, 15%)",
		padding: 15,
		borderRadius: 14,
	},
	wrapperFlex: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	title: {
		color: "#fff",
		letterSpacing: 1,
	},
	subtitle: {
		color: "hsl(185, 41%, 84%)",
		fontWeight: "200",
		fontSize: 12,
	},
	valueText: {
		color: "hsl(172, 67%, 45%)",
		fontSize: 32,
		fontWeight: "700",
	},
	buttonContainer: {
		width: "100%",
		borderRadius: 5,
		padding: 12,
		backgroundColor: "hsl(172, 67%, 45%)",
		marginTop: 12,
	},
	buttonText: {
		color: "hsl(183, 100%, 15%)",
		textAlign: "center",
		textTransform: "uppercase",
		fontSize: 18,
		fontWeight: "600"
	},
});

export default PresentationPerPerson;
