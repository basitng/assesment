import React from "react";
import { Box, Text, Menu, MenuButton, MenuGroup } from "@chakra-ui/react";
import { MenuItem, MenuList } from "@chakra-ui/menu";
import { GrAdd } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";
import { RiBubbleChartFill } from "react-icons/ri";
import { TiVideo } from "react-icons/ti";
import Dropzone from "react-dropzone";

interface FabMenuProps {
  onOpenPicture: () => void;
  onOpenVideo?: () => void;
  onOpenSocial?: () => void;
}
const FabMenu = ({
  onOpenPicture,
  onOpenSocial,
  onOpenVideo,
}: FabMenuProps) => {
  return (
    <Menu>
      <Box
        mt={1}
        as={MenuButton}
        borderRadius="100px"
        height="30px"
        width={"30px"}
        backgroundColor="#e7f1e9"
        display={"grid"}
        placeContent="center"
      >
        <GrAdd fontSize={"15px"} />
      </Box>
      <MenuList>
        <MenuGroup title="EMBEDS">
          <MenuItem onClick={onOpenPicture} alignItems={"center"}>
            {<BsFillImageFill />}
            <Box lineHeight={1} pl={3}>
              <Text py={1} fontSize={"14px"} fontWeight="bold">
                Picture
              </Text>
              <Text fontSize={"xs"}>jpeg, png</Text>
            </Box>
          </MenuItem>
          <MenuItem onClick={onOpenVideo} alignItems={"center"}>
            {<TiVideo />}
            <Box lineHeight={1} pl={3}>
              <Text py={1} fontSize={"14px"} fontWeight="bold">
                Video
              </Text>
              <Text fontSize={"xs"}>jW player, YouTube, Vimeo</Text>
            </Box>
          </MenuItem>
          <MenuItem onClick={onOpenSocial} alignItems={"center"}>
            {<RiBubbleChartFill />}
            <Box lineHeight={1} pl={3}>
              <Text py={1} fontSize={"14px"} fontWeight="bold">
                Social
              </Text>
              <Text fontSize={"xs"}>Instagram, Twitter, TikTok, Facebook</Text>
            </Box>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default FabMenu;
