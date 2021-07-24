import React, { useState } from "react";
import { Container, Text } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

export default function ButtonAudioRecord({ onRecord }) {
  const [recording, setRecording] = useState();

  const startRecording = async () => {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    const response = await fetch(uri);
    const blob = await response.blob();
    onRecord(blob);
  };

  return (
    <Container onPress={recording ? stopRecording : startRecording}>
      <Text>Gravar audio</Text>
      {recording ? (
        <FontAwesome name="stop" size={20} color="#fff" />
      ) : (
        <FontAwesome name="microphone" size={20} color="#fff" />
      )}
    </Container>
  );
}
