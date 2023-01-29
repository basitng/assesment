import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useContext } from "react";
import Dropzone from "react-dropzone";
import { MediaContext } from "../context/mediaProvider";

interface DropImage {
  isOpen: boolean;
  close: () => void;
}
export default function DropImage({ isOpen, close }: DropImage) {
  const [selectedImages, setSelectedImage] = React.useState<File>("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { dispatch, state } = useContext(MediaContext);
  console.log("🚀 ~ file: PictureModal.tsx:26 ~ DropImage ~ state", state);

  const handleImageUpload = useCallback(() => {
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", "wazobia-pre");
    setIsLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dbmnrmjlm/image/upload", formData)
      .then((res) => {
        dispatch({ type: "ADD_PICTURE", payload: res.data.url });
        setIsLoading(false);

        close();
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [selectedImages]);
  return (
    <Modal onClose={close} isOpen={isOpen} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Embed</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <section>
            <Text fontSize={"16px"} fontWeight={500}>
              Upload Image
            </Text>
            <Text fontSize={"12px"} pt={4}>
              FILE UPLOAD
            </Text>
            <Box
              my={3}
              width={"100%"}
              height="30vh"
              border="1px dashed green"
              borderRadius={"10px"}
              justifyContent="center"
              alignItems={"center"}
              display="flex"
            >
              <Dropzone
                accept={{
                  "image/png": [".png"],
                  "image/jpeg": [".jpeg"],
                  "image/jpg": [".jpg"],
                }}
                onDrop={(acceptedFiles) => setSelectedImage(acceptedFiles[0])}
              >
                {({ getRootProps, getInputProps }) => (
                  <Button
                    {...getRootProps()}
                    name="file"
                    variant={"outline"}
                    borderColor="green.600"
                  >
                    Import Image from Device
                    <input name="file" id="file" {...getInputProps()} />
                  </Button>
                )}
              </Dropzone>
            </Box>
            <Box my={5}>
              <Button
                onClick={handleImageUpload}
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
