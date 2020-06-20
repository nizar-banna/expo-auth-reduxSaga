import {Alert, Button} from "react-native";

    const Alert2Buttons =(title) => Alert.alert(
        null,
        title,
        [
            {
                text: "cancel",
                onPress: () => console.log("cancelled"),
                style: "cancel"
            },
            {
                text: "Okay",
                onPress: () => console.log("okk")
            }
        ]
    )

export default Alert2Buttons
