import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { FacebookEmbed, InstagramEmbed } from "react-social-media-embed";
import ReactPlayer from "react-player";
import { MediaContext } from "../context/mediaProvider";
import SocialContainer from "./SocialContainer";

const Renderer = () => {
  const { dispatch, state } = React.useContext(MediaContext);
  console.log("🚀 ~ file: Emitter.ts:11 ~ EventEmitter ~ state", state);

  return (
    <Box>
      {state.picture && (
        <Box height="40vh" width="100%">
          <Image
            height="100%"
            width={"100%"}
            objectFit="contain"
            sx={{ aspectRatio: 100 / 100 }}
            src={state.picture}
          />
        </Box>
      )}
      {state.video && (
        <ReactPlayer style={{ maxWidth: "100%" }} url={state.video} />
      )}
      {state.social?.facebook && (
        <SocialContainer>
          <FacebookEmbed url={state.social.facebook} width={"100%"} />
        </SocialContainer>
      )}
      {state.social?.instagram && (
        <SocialContainer>
          <InstagramEmbed url={state.social.instagram} width={"100%"} />
        </SocialContainer>
      )}
    </Box>
  );
};

export default Renderer;
