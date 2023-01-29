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
import { MediaContext } from "../context/mediaProvider";

interface VideoModal {
  isOpen: boolean;
  close: () => void;
}
export default function VideoModal({ close, isOpen }: VideoModal) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { dispatch } = useContext(MediaContext);
  const [link, setLink] = React.useState("");

  const handleVideoFetch = useCallback(() => {
    dispatch({ type: "ADD_VIDEO", payload: link });
    close();
  }, [link]);
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
              Video Provider
            </Text>
            <Select placeholder="Select video source">
              <option defaultValue={"YouTube"} value="YouTube">
                YouTube
              </option>
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
                onClick={handleVideoFetch}
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
