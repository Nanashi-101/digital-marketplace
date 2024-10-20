/* eslint-disable @typescript-eslint/no-explicit-any */
//* This is the rich editor that we are creating to use in our application. We are using the tiptap library to create this editor. We have created a simple toolbar with a button to add a heading to the editor.

"use client";

import { Button } from "@/components/ui/button";
import {
  EditorContent,
  JSONContent,
  useEditor,
  type Editor,
} from "@tiptap/react"; // Import the useEditor hook from the tiptap library
import StarterKit from "@tiptap/starter-kit"; // Import the StarterKit extension from the tiptap library

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  return (
    <div className="flex flex-wrap gap-5">
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} // Add a heading to the editor. This is the process of adding a heading to the editor through tiptap
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
        className="font-medium"
      >
        H1
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} // Add a heading to the editor. This is the process of adding a heading to the editor through tiptap
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
        className="font-medium"
      >
        H2
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} // Add a heading to the editor. This is the process of adding a heading to the editor through tiptap
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
        }
        className="font-medium"
      >
        H3
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()} // Add a heading to the editor. This is the process of adding a heading to the editor through tiptap
        variant={editor.isActive("bold") ? "default" : "secondary"}
        className="font-medium"
      >
        B
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()} // Add a heading to the editor. This is the process of adding a heading to the editor through tiptap
        variant={editor.isActive("italic") ? "default" : "secondary"}
        className="font-medium italic roboto font-mono"
      >
        I
      </Button>
    </div>
  );
};

//  Create a TipTapEditor component that uses the useEditor hook to create an editor with the StarterKit extension
export function TipTapEditor({
  setJson,
  json,
}: {
  setJson: any;
  json: JSONContent | null;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: json,
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[150px] prose prose-sm sm:prose-base",
      },
    },
    immediatelyRender: false,//* This is necessary to prevent the editor from rendering immediately and avoid hydration mismatches.
    onUpdate: ({ editor }) => {
      setJson(editor.getJSON());
    }
  });

  return (
    <div className="">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="rounded-lg border p-2 min-h-[150px] mt-2"
      />
    </div>
  );
}
