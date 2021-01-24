import React from "react";

const WhatSection = () => {
  return (
    <div className="what">
      <div className="div-block-5 whatdiv">
        <h2 className="heading">
          What
          <br />
          is
          <br />
          speakEasy
        </h2>
        <img
          src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b35c39a21887ea45d225b_QuestionMark.svg"
          loading="lazy"
          alt=""
          className="image-5"
        />
      </div>
      <p className="paragraph-5">
        speakEasy is a chat app designed for the clearest communication of tone
        in your texts. <br />
        <br />
        Instead of using emoji or unconventional indicators (e.g., /s for
        sarcasm, or /j for joking), messages can be labeled with your intended
        tone.
      </p>
      <div className="columns-2 w-row">
        <div className="w-col w-col-6">
          <h1 className="heading-5">Instead of memorizing these...</h1>
          <img
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600c9e677e43edb4fcd53551_Tone%20Indicators.svg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="w-col w-col-6">
          <h1 className="heading-6">Just select one of these!</h1>
          <img
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600c9e1f75f36b670f5c7c5b_TONE%20SELECTION.svg"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhatSection;
