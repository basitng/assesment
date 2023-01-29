import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import { ADD_FACEBOOK, ADD_INSTAGRAM } from "../context/actionTypes";
import { MediaContext } from "../context/mediaProvider";

interface SocialModal {
  isOpen: boolean;
  close: () => void;
}
type selectionTypes = "Instagram" | "Facebook" | "";

export default function SocialModal({ close, isOpen }: SocialModal) {
  const { dispatch, state } = useContext(MediaContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedSocial, setSelectedSocial] =
    React.useState<selectionTypes>("");
  const [link, setLink] = React.useState("");

  const handleSelection = (e: any) => {
    setSelectedSocial(e.target.value);
    console.log(e.target.value);
  };

  const handleSocialFetch = () => {
    console.log("clicked----------------");
    if (selectedSocial === "Facebook") {
      console.log(
        "> set state -----------------------",
        state,
        "............",
        link
      );
      dispatch({
        type: "ADD_SOCIAL",
        sociaPayload: {
          type: ADD_FACEBOOK,
          payload: link,
        },
      });
      close();
    }
    if (selectedSocial === "Instagram") {
      console.log("> set state -----------------------", state, link);
      dispatch({
        type: "ADD_SOCIAL",
        sociaPayload: {
          type: ADD_INSTAGRAM,
          payload: link,
        },
      });
      close();
    }
  };
  return (
    <Modal onClose={close} isOpen={isOpen} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Embed</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <section>
            <Text
              textTransform={"capitalize"}
              fontSize={"14px"}
              pb={2}
              fontWeight={500}
            >
              Social Media Platform
            </Text>
            <Select
              onChange={(e) => handleSelection(e)}
              placeholder="Select Social Media Platform"
            >
              <option defaultValue={"Facebook"} value="Facebook">
                Facebook
              </option>
              <option value="Instagram">Instagram</option>
            </Select>
            <Text fontSize={"14px"} pb={2} mt={3} fontWeight={500}>
              URL
            </Text>
            <Input
              placeholder="Link here"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Box my={5}>
              <Button
                onClick={handleSocialFetch}
                bgColor={"green.600"}
                color="#fff"
                variant="solid"
                isLoading={isLoading ? true : false}
              >
                Embed
              </Button>
              <Button onClick={close} ml={2} color={"grey.600"} variant="solid">
                Cancel
              </Button>
            </Box>
          </section>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
