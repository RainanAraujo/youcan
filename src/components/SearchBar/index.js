import React from "react";
import { Container, SearchInput } from "./styles";

export default function SearchBar({ placeholder }) {
  return (
    <Container>
      <SearchInput platform="android" round={true} placeholder={placeholder} />
    </Container>
  );
}
