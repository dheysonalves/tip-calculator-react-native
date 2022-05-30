import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputDataProps {
	title: string;
	dataValue: string;
}

const InputData = ({ dataValue, title}: InputDataProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					keyboardType="number-pad"
					selectionColor="hsl(183, 100%, 15%)"
					value={dataValue}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-start",
	},
	title: {
		color: "hsl(184, 14%, 56%)",
		fontWeight: "700",
		letterSpacing: 0.6,
		fontSize: 18,
		marginVertical: 4,
	},
	inputContainer: {
		width: "100%",
	},
	input: {
		backgroundColor: "hsl(189, 41%, 97%)",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 5,
		fontSize: 24,
		color: "hsl(183, 100%, 15%)",
		fontWeight: "700",
		letterSpacing: 0.6,
		textAlign: 'right',
	},
	selectionColor: {},
});

export default InputData;
