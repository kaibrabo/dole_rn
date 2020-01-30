import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProfileScreen from "./components/ProfileScreen";

const MainNavigator = createStackNavigator({
    Profile: ProfileScreen
});

const App = createAppContainer(MainNavigator);

export default App;
