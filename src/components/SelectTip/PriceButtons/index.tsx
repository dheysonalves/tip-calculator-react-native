import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";

interface PriceButtonsInterface {
	pricesData: {
		value: string;
	}[];
	customInputValue: string;
	onHandleCustomInput: (value: string) => void;
	selectedOption: string;
	onHandleSelectedOption: (value: string) => void;
	onHandleFocus: () => void;
	onPressPercentage: (value: number) => void;
	isDisabled?: boolean;
	editable?: boolean;
}

const PriceButtons = ({
	pricesData,
	customInputValue,
	onHandleCustomInput,
	onHandleFocus,
	onPressPercentage,
	editable,
	isDisabled,
	selectedOption,
	onHandleSelectedOption,
}: PriceButtonsInterface) => {
	const [isFocused, setIsFocused] = useState(false);
	const handleDataValue = (value: string) => {
		onHandleCustomInput(value);
	};

	const handleSelectedOption = (value: string) => {
		onHandleSelectedOption(value);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Select Tip %</Text>
			<View style={styles.pricesWrapper}>
				{pricesData.map((item, index) => {
					return (
						<Pressable
							key={String(index)}
							onPress={() => {
								handleSelectedOption(item.value);
								onPressPercentage(Number(item.value) / 100);
							}}
							disabled={isDisabled}
							style={[
								styles.baseButton,
								item.value === selectedOption
									? styles.selected
									: styles.unselected,
								isDisabled ? styles.disabled : null,
							]}>
							<Text
								style={[
									styles.baseButtonText,
									item.value === selectedOption
										? styles.selected
										: styles.unselectedButtonText,
								]}>
								{item.value}%
							</Text>
						</Pressable>
					);
				})}

				<TextInput
					style={[styles.customInputStyle, isFocused ? styles.focused : null]}
					selectionColor="hsl(183, 100%, 15%)"
					placeholderTextColor="hsla(183.11688311688312, 100%, 15.098039215686274%, 0.5)"
					placeholder="Custom"
					keyboardType="numeric"
					value={customInputValue}
					onChangeText={handleDataValue}
					onFocus={() => {
						setIsFocused(true);
						handleSelectedOption("");
						onHandleFocus();
					}}
					onBlur={() => {
						setIsFocused(false);
					}}
					editable={editable}

				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
	},
	pricesWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	title: {
		color: "hsl(184, 14%, 56%)",
		fontWeight: "700",
		letterSpacing: 0.6,
		fontSize: 18,
		marginVertical: 4,
	},
	baseButton: {
		borderRadius: 5,
		padding: 10,
		minWidth: "48%",
		marginVertical: 10,
	},
	unselected: {
		backgroundColor: "hsl(183, 100%, 15%)",
	},
	selected: {
		backgroundColor: "hsl(172, 67%, 45%)",
	},
	focused: {
		borderColor: "hsl(172, 67%, 45%)",
		borderWidth: 1,
	},
	error: {
		borderColor: "red",
		borderWidth: 1,
	},
	customInputStyle: {
		borderRadius: 5,
		padding: 10,
		minWidth: "48%",
		marginVertical: 10,
		fontSize: 24,
		color: "hsl(183, 100%, 15%)",
		backgroundColor: "hsl(189, 41%, 97%)",
		textAlign: "right",
	},
	baseButtonText: {
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
	},
	unselectedButtonText: {
		color: "#fff",
	},
	selectedButtonText: {
		color: "hsl(183, 100%, 15%)",
	},
	disabled: {
		opacity: 0.8,
	},
});

export default PriceButtons;
