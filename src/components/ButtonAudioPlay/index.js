import React, { useState, useEffect } from "react";
import { Container, Timer, ProgressBarContainer, ProgressBar } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { set } from "react-native-reanimated";

export default function ButtonAudioPlay({ uri }) {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [status, setStatus] = useState({});
  const [bellSound, setBellSound] = useState();

  useEffect(() => {
    const loadSounds = async () => {
      console.log("loading sound");
      const { sound } = await Audio.Sound.createAsync({
        uri: uri,
      });
      await sound.setIsLoopingAsync(true);
      await sound.pauseAsync();
      await sound.setPositionAsync(0);
      setStatus(await sound.getStatusAsync());
      sound.setOnPlaybackStatusUpdate((status) => {
        setStatus(status);
      });
      setBellSound(sound);
    };

    loadSounds();

    return async () => {
      await bellSound?.unloadAsync();
      setStatus({});
      console.log("unloading sound");
    };
  }, []);

  useEffect(() => {
    return async () => {
      await bellSound?.unloadAsync();
      setStatus({});
      console.log("unloading sound");
    };
  }, [bellSound]);

  const audioControlHandle = async (value) => {
    setAudioPlayed(value);
    if (value) {
      await bellSound?.playAsync();
    } else {
      await bellSound?.pauseAsync();
    }
  };

  return (
    <Container>
      {audioPlayed ? (
        <FontAwesome
          name="pause"
          size={30}
          color="#fff"
          onPress={() => audioControlHandle(false)}
        />
      ) : (
        <FontAwesome
          name="play"
          size={30}
          color="#fff"
          onPress={() => audioControlHandle(true)}
        />
      )}

      <ProgressBarContainer>
        <ProgressBar
          currentTime={status?.positionMillis || 0}
          timeTotal={status?.durationMillis || 1}
        ></ProgressBar>
      </ProgressBarContainer>
      <Timer>
        {new Date(status?.durationMillis || 0).toISOString().substr(14, 5)}
      </Timer>
    </Container>
  );
}
