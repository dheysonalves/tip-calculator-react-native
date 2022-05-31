import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>SPLI</Text>
				<Text style={styles.headerText}>TTER</Text>
			</View>
			<ScrollView style={styles.content}>
				<StatusBar style="auto" />
				<InputData title="Bill" dataValue="142.55" />
				<PriceButtons pricesData={DATA} customInputValue="" />
				<InputData title="Number of People" dataValue="5" />
				<PresentationPerPerson />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "hsl(185, 41%, 84%)",
	},
	header: {
		flex: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "hsl(185, 41%, 84%)",
		paddingTop: 20,
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
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
});
