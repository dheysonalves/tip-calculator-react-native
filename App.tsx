import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { InputData } from "./src/components/BaseComponents";
import PresentationPerPerson from "./src/components/PresentationPerPerson";
import PriceButtons from "./src/components/SelectTip/PriceButtons";

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

	const handleBillValue = useCallback((value: string) => {
		setBillValue(value);
	}, []);

	const handlePeopleValue = useCallback((value: string) => {
		setPeopleValue(value);
	}, []);

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
					dataValue={billValue}
					onHandleDataValue={handleBillValue}
				/>
				<PriceButtons pricesData={DATA} customInputValue="" />
				<InputData
					title="Number of People"
					dataValue={peopleValue}
					onHandleDataValue={handlePeopleValue}
				/>
				<PresentationPerPerson tipAmount="4.27" totalValue="32.80" />
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
