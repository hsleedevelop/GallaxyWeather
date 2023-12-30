import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker({ isVisible, children, onClose }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose your emoji</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="#fff" />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        position: "absolute",
        bottom: 0
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: '16%',
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20
    },
    title: {
        color: "#fff",
        fontSize: 16
    },
    pickerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
        paddingVertical: 20
    }
})