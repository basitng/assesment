import React, { useState, useEffect } from "react";
// WANG EDITOR
import "@wangeditor/editor/dist/css/style.css";
import { DomEditor, i18nChangeLanguage } from "@wangeditor/editor";
i18nChangeLanguage("en");
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";

// Chakra UI
import { Box, Image, useDisclosure } from "@chakra-ui/react";

import DropImage from "./components/PictureModal";
import FabMenu from "./components/FabMenu";
import { editoConfigSettings, toolbarSettings } from "./config";
import VideoModal from "./components/VideoModal";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";
import SocialModal from "./components/SocialModal";
import Renderer from "./components/renderer";

function MyEditor() {
  const {
    isOpen: isPictureOpen,
    onOpen: onOpenPicture,
    onClose: onClosePicture,
  } = useDisclosure();
  const {
    isOpen: isVideoOpen,
    onOpen: onOpenVideo,
    onClose: onCloseVideo,
  } = useDisclosure();
  const {
    isOpen: isSocialOpen,
    onOpen: onOpenSocial,
    onClose: onCloseSocial,
  } = useDisclosure();
  const [editor, setEditor] = useState<IDomEditor | any>();
  const [html, setHtml] = useState("<p></p>");
  DomEditor.getToolbar(editor);

  // Wang Customization
  const toolbarConfig = { ...toolbarSettings };
  const editorConfig = { ...editoConfigSettings };

  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <Box>
      <Box className="toolbar">
        <Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" />
      </Box>
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={(editor) => setHtml(editor.getHtml())}
        mode="default"
        className="editor"
      />

      <DropImage close={onClosePicture} isOpen={isPictureOpen} />
      <VideoModal close={onCloseVideo} isOpen={isVideoOpen} />
      <SocialModal close={onCloseSocial} isOpen={isSocialOpen} />

      <Renderer />
      <FabMenu
        onOpenPicture={onOpenPicture}
        onOpenSocial={onOpenSocial}
        onOpenVideo={onOpenVideo}
      />
    </Box>
  );
}

export default MyEditor;
