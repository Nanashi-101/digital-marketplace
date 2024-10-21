"use client";

import { EditorContent, type JSONContent, useEditor } from '@tiptap/react'
import React from 'react'
import StarterKit from '@tiptap/starter-kit'

function ProductDescription({content}: {content: JSONContent}) {
    const editor = useEditor({
        editable: false,
        content: content,
        extensions: [StarterKit],
        editorProps: {
            attributes:{
                class: "prose prose-sm sm:prose-base dark:prose-invert"
            }
        }
    })
  
    if(!editor) return null

    return (
        <>
        <EditorContent editor={editor} />
        </>
    )
}

export default ProductDescription
