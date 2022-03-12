import React, { useState, useEffect } from "react";
import { Container, Text } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import ButtonAudioPlay from "../ButtonAudioPlay";
import { Audio } from "expo-av";

export default function ButtonAudioRecord({ key, onRecord }) {
  const [recording, setRecording] = useState();
  const [audio, setAudio] = useState("");

  useEffect(() => {
    setAudio("");
  }, [key]);

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

  const containerHandle = () => {
    if (audio != "") {
      setAudio("");
    } else {
      if (recording) {
        stopRecording();
      } else {
        startRecording();
      }
    }
  };

  return (
    <>
      <Container onPress={containerHandle}>
        <Text>{audio == "" ? "Gravar" : "Apagar"} Audio</Text>
        {recording ? (
          <FontAwesome name="stop" size={20} color="#fff" />
        ) : (
          <>
            {audio == "" ? (
              <FontAwesome name="microphone" size={20} color="#fff" />
            ) : (
              <FontAwesome name="trash" size={20} color="#fff" />
            )}
          </>
        )}
      </Container>
      {audio != "" && <ButtonAudioPlay uri={audio} />}
    </>
  );
}
