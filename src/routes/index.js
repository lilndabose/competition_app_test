import SplashScreen from "../screens/SplashScreen";
import SignupScreen from "../screens/SignupScreen";
import CompetitionList from "../screens/CompetitionList";
import DoneScreen from "../screens/DoneScreen";


export const ROUTES = [
    {
        route: "SplashScreen",
        component:  SplashScreen
    },
    {
        route: "SignupScreen",
        component: SignupScreen
    },
    {
        route:"CompetitionList",
        component: CompetitionList
    },
    {
        route:"DoneScreen",
        component: DoneScreen
    },
]