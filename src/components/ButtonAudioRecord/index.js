import React, { useState, useEffect } from "react";
import { Container, Text } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

export default function ButtonAudioRecord({ onRecord }) {
  const [recording, setRecording] = useState();
  const [audio, setAudio] = useState("");

  const [bellSound, setBellSound] = useState();

  const playSound = async () => {
    console.log("playing sound");
    await bellSound?.replayAsync();
  };

  const handleOnPress = () => {
    playSound();
  };

  useEffect(() => {
    const loadSounds = async () => {
      console.log("loading sound");

      const { sound } = await Audio.Sound.createAsync({
        uri: "https://www.kozco.com/tech/piano2.wav",
      });
      setBellSound(sound);
    };

    loadSounds();

    return () => {
      console.log("unloading sound");
      bellSound?.unloadAsync();
    };
  }, []);

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
      console.log(err);
    }
  };

  const stopRecording = async () => {
    try {
      console.log("Stopping recording..");
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setAudio(uri);
      const response = await fetch(uri);
      const blob = await response.blob();
      onRecord(blob);
    } catch (err) {
      console.log(err);
    }
  };

  const playAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync({
        uri: audio,
      });
      await sound.replayAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onPress={recording ? stopRecording : startRecording}>
      <Text>Gravar audio</Text>
      {recording ? (
        <>
          <FontAwesome name="stop" size={20} color="#fff" />
          <FontAwesome name="stop" size={20} color="#fff" />
        </>
      ) : (
        <FontAwesome name="microphone" size={20} color="#fff" />
      )}
    </Container>
  );
}
