import MarkerIcon from "../assets/icons/MarkerIcon";
import { FC } from "react";
import { View } from "react-native";
import { CardClasses } from "../styles/CardClasses";

interface EducationMarkerProps {
    accentColor: string
}

const EducationMarker: FC<EducationMarkerProps> = ({accentColor}) => {
    return (
        <View style={{...CardClasses.marker, backgroundColor: accentColor}}>
            <MarkerIcon/>
        </View>
    )
}

export default EducationMarker;
