import { IEditorConfig, IToolbarConfig } from "@wangeditor/editor";

export const toolbarSettings: Partial<IToolbarConfig> = {
  toolbarKeys: [
    "fontSize",
    "|",
    "insertLink",
    "insertImage",
    "|",
    "justifyLeft",
    "justifyRight",
    "justifyCenter",
    "|",
    "bold",
    "italic",
    "|",
    "bulletedList",
    "numberedList",
    "blockquote",
  ],
};

export const editoConfigSettings: Partial<IEditorConfig> = {
  placeholder: "Add content",
  autoFocus: true,
  hoverbarKeys: [null],
};
