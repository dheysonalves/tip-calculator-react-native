import React from "react";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";

interface PriceButtonsInterface {
	pricesData: {
		value: string;
	}[];
	customInputValue: string;
	onHandleCustomInput: (value: string) => void;
	onPressPercentage: (value: number) => void;
}

const PriceButtons = ({
	pricesData,
	customInputValue,
	onHandleCustomInput,
	onPressPercentage,
}: PriceButtonsInterface) => {
	const handleDataValue = (value: string) => {
		onHandleCustomInput(value);
	};

	return (
		<View style={styles.container}>
			{pricesData.map((item, index) => {
				return (
					<Pressable
						key={String(index)}
						onPress={() => {
							onPressPercentage(Number(item.value) / 100);
						}}
						style={styles.buttonStyle}>
						<Text style={styles.buttonText}>{item.value}%</Text>
					</Pressable>
				);
			})}
			<TextInput
				style={styles.customInputStyle}
				selectionColor="hsl(183, 100%, 15%)"
				placeholderTextColor="hsla(183.11688311688312, 100%, 15.098039215686274%, 0.5)"
				placeholder="Custom"
				keyboardType="numeric"
				value={customInputValue}
				onChangeText={handleDataValue}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	buttonStyle: {
		backgroundColor: "hsl(183, 100%, 15%)",
		borderRadius: 5,
		padding: 10,
		minWidth: "48%",
		marginVertical: 10,
	},
	customInputStyle: {
		borderRadius: 5,
		padding: 10,
		minWidth: "48%",
		marginBottom: 10,
		fontSize: 24,
		color: "hsl(183, 100%, 15%)",
		backgroundColor: "hsl(189, 41%, 97%)",
		textAlign: "right",
	},
	buttonText: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
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
