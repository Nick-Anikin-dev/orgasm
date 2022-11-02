import StackNavigator from "./components/StackNavigator";
import { Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts as useInter, } from '@expo-google-fonts/inter';
import { Poppins_600SemiBold, useFonts as usePoppins, } from '@expo-google-fonts/poppins';
import { Text } from "react-native";
import { setupStore } from "./setup/store";
import { Provider } from "react-redux";

const store = setupStore();

export default function App() {
    let [ interLoaded ] = useInter({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });
    let [ poppingLoaded ] = usePoppins({Poppins_600SemiBold});

    if (!poppingLoaded && !interLoaded) {
        return <Text>Loading</Text>
    }

    return (
        <Provider store={store}>
            <StackNavigator/>
        </Provider>
    )
}
