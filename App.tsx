import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import InputData from "./src/components/InputData";
import PresentationPerPerson from "./src/components/PresentationPerPerson";
import PriceButtons from "./src/components/SelectTip/PriceButtons";
import { maskCurrency } from "./src/utils/utils";

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
	const [selectedOption, setSelectedOption] = useState("");

	const handleBillValue = useCallback((value: string) => {
		setBillValue(value);
	}, []);

	const handlePeopleValue = useCallback((value: string) => {
		setPeopleValue(value);
	}, []);

	const handleCustomValue = useCallback((value: string) => {
		setCustomValue(value);
	}, []);

	const handleSelectedOption = useCallback((value: string) => {
		setSelectedOption(value);
	}, []);

	const handleSplitterTipAmount = useCallback(() => {
		if (tipValue === 0 || peopleValue === "") return "0.00";
		const billAmount = Number(billValue) * 10;
		const totalPeopleValue = Number(peopleValue);

		const tipAmountTotal = (billAmount * tipValue) / totalPeopleValue;
		setTipAmountPerPerson(tipAmountTotal.toFixed(2).toString());
	}, [tipValue, peopleValue, customValue, setTipAmountPerPerson]);

	const handleTotalSplitterAmount = useCallback(() => {
		if (tipValue === 0 || peopleValue === "" || billValue === "") return "0.00";

		const billAmount = Number(billValue) * 10;
		const totalPeopleValue = Number(peopleValue);

		const total = (billAmount * tipValue + billAmount) / totalPeopleValue;
		setTotalAmountPerPerson(total.toFixed(2).toString());
	}, [billValue, tipValue, peopleValue, customValue, setTipAmountPerPerson]);

	const handleResetAllValues = useCallback(() => {
		setBillValue("");
		setPeopleValue("");
		setCustomValue("");
		setTipValue(0.0);
		setSelectedOption("");
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
					onHandleFocus={() => {
						setTipValue(0);
					}}
					editable={false}
					selectedOption={selectedOption}
					onHandleSelectedOption={handleSelectedOption}
				/>
				<InputData
					title="Number of People"
					dataValue={peopleValue}
					onHandleDataValue={handlePeopleValue}
					hasError={Number(peopleValue) <= 0}
					isEditable={!!tipValue || !!customValue}
				/>
				<PresentationPerPerson
					tipAmount={Number(peopleValue) === 0 ? "0.00" : tipAmountPerPerson}
					totalValue={Number(peopleValue) === 0 ? "0.00" : totalAmountPerPerson}
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
