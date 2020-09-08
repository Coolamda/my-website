import React, { Component } from "react";

import styled from "styled-components";
import { delay } from "q";

const FullscreenText = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigText = styled.span`
  font-size: 6rem;
`;

class Home extends Component {
  state = {
    text: "",
  };

  async componentDidMount() {
    const wordList = [
      "Hallo!",
      "Mir fällt nichts ein...",
      "Hier etwas Platzhaltertext",
      ":)",
    ];

    for (let i = 0; i < wordList.length; i++) {
      const word = wordList[i];
      const splitWord = word.split("");

      for (let j = 0; j < splitWord.length; j++) {
        if (j === splitWord.length - 1) {
          this.setState({ text: this.state.text + splitWord[j] });
          await delay(1200);

          this.setState({ text: "" });
        } else {
          await delay(130);
          this.setState({ text: this.state.text + splitWord[j] });
        }
      }
    }

    this.setState({ text: wordList[wordList.length - 1] });
  }

  render() {
    return (
      <FullscreenText>
        <BigText>{this.state.text}</BigText>
      </FullscreenText>
    );
  }
}

export default Home;
