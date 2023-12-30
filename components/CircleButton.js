import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CircleButton({ onPress }) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable
                style={styles.circleButton}
                onPress={onPress}
            >
                <MaterialIcons
                    name="add"
                    size={38}
                    color="#25292e"
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderRadius: 42,
        borderWidth: 4,
        borderColor: "#ffd33d",
        justifyContent: "center",
        shadowColor: "#f00",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#fff"
    }
})