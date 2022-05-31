import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import InputData from "./src/components/InputData";
import PresentationPerPerson from "./src/components/PresentationPerPerson";
import PriceButtons from "./src/components/SelectTip/PriceButtons";
import { maskCurrency, maskSpecial } from "./src/utils/utils";

export default function App() {
	const DATA = [
		{ value: "5" },
		{
			value: "10",
		},
		{
			value: "15",
		},
		{
			value: "25",
		},
		{
			value: "50",
		},
	];
	const [billValue, setBillValue] = useState("");
	const [peopleValue, setPeopleValue] = useState("");
	const [customValue, setCustomValue] = useState("");
	const [tipValue, setTipValue] = useState(0);
	const [tipAmountPerPerson, setTipAmountPerPerson] = useState("0.00");
	const [totalAmountPerPerson, setTotalAmountPerPerson] = useState("0.00");

	const handleBillValue = useCallback((value: string) => {
		setBillValue(value);
	}, []);

	const handlePeopleValue = useCallback((value: string) => {
		setPeopleValue(value);
	}, []);

	const handleCustomValue = useCallback((value: string) => {
		setCustomValue(value);
	}, []);

	const handleSplitterTipAmount = useCallback(() => {
		if (tipValue === 0 || peopleValue === "") return "0.00";
		const tipAmountTotal = (Number(billValue) * 10 * tipValue) / Number(peopleValue);

		setTipAmountPerPerson(tipAmountTotal.toFixed(2).toString());
	}, [tipValue, peopleValue, setTipAmountPerPerson]);

	const handleTotalSplitterAmount = useCallback(() => {
		if (tipValue === 0 || peopleValue === "" || billValue === "") return "0.00";

		const total =
			(Number(billValue) * 10 * tipValue + Number(billValue) * 10) /
			Number(peopleValue);

		setTotalAmountPerPerson(total.toFixed(2).toString());
	}, [billValue, tipValue, peopleValue, setTipAmountPerPerson]);

	const handleResetAllValues = useCallback(() => {
		setBillValue("");
		setPeopleValue("");
		setCustomValue("");
		setTipValue(0.0);
		setTipAmountPerPerson("0.00");
		setTotalAmountPerPerson("0.00");
	}, [
		setBillValue,
		setPeopleValue,
		setCustomValue,
		setTipValue,
		setTipAmountPerPerson,
		setTotalAmountPerPerson,
	]);

	useEffect(() => {
		handleSplitterTipAmount();
		handleTotalSplitterAmount();
	}, [handleSplitterTipAmount, handleTotalSplitterAmount]);

	return (
		<ScrollView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.header}>
				<Text style={styles.headerText}>SPLI</Text>
				<Text style={styles.headerText}>TTER</Text>
			</View>
			<View style={styles.content}>
				<InputData
					title="Bill"
					dataValue={maskCurrency(billValue)}
					onHandleDataValue={handleBillValue}
					hasError={Number(billValue) <= 0}
				/>
				<PriceButtons
					pricesData={DATA}
					customInputValue={customValue}
					onHandleCustomInput={handleCustomValue}
					onPressPercentage={setTipValue}
				/>
				<InputData
					title="Number of People"
					dataValue={peopleValue}
					onHandleDataValue={handlePeopleValue}
					hasError={Number(peopleValue) <= 0}
				/>
				<PresentationPerPerson
					tipAmount={tipAmountPerPerson}
					totalValue={totalAmountPerPerson}
					onPressReset={handleResetAllValues}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "hsl(185, 41%, 84%)",
	},
	header: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 200,
		backgroundColor: "hsl(185, 41%, 84%)",
	},
	headerText: {
		color: "hsl(183, 100%, 15%)",
		fontWeight: "500",
		letterSpacing: 10,
		fontSize: 24,
	},
	content: {
		backgroundColor: "#fff",
		paddingHorizontal: 24,
		paddingVertical: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
});
