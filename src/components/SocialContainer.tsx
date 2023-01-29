import { Box } from "@chakra-ui/react";
import React from "react";

export default function SocialContainer({ children }: any) {
  return (
    <Box
      width="100%"
      maxHeight={"50vh"}
      overflowY="scroll"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="fancyScroll"
    >
      {children}
    </Box>
  );
}
