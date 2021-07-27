import React, { useState } from "react";
import { Container, Timer, ProgressBarContainer, ProgressBar } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export default function ButtonAudioPlay({ currentTime, timeTotal }) {
  const [audioPlayed, setAudioPlayed] = useState(false);
  return (
    <Container>
      {audioPlayed ? (
        <FontAwesome
          name="pause"
          size={22}
          color="#fff"
          onPress={() => setAudioPlayed(false)}
        />
      ) : (
        <FontAwesome
          name="play"
          size={22}
          color="#fff"
          onPress={() => setAudioPlayed(true)}
        />
      )}

      <ProgressBarContainer>
        <ProgressBar
          currentTime={currentTime}
          timeTotal={timeTotal}
        ></ProgressBar>
      </ProgressBarContainer>
      <Timer>3:20</Timer>
    </Container>
  );
}
