import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import logo from "../../assets/logo.png";
import "react-native-gesture-handler";

export default function TestFiles() {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`You can't share on this platform`);
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  };

  let url = logo;
  if (selectedImage !== null) {
    url = { uri: selectedImage.localUri };
  }

  return (
    <View style={styles.container}>
      <Image source={url} style={styles.logo} />

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Upload Img</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}>Share this photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    display: "flex",
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    width: 95
    // alignItems: "center"
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "cover"
  }
});
