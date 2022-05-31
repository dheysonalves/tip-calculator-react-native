import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
			<StatusBar style="auto" />
			<InputData title="Bill" dataValue="142.55" />
			<PriceButtons pricesData={DATA} customInputValue="" />
      <PresentationPerPerson />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		padding: 16,
	},
});
