import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type TipTapProps = {
  content: string;
  onChange: (content: string) => void;
};

const TipTap = ({ content, onChange }: TipTapProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl border p-2 w-full h-full',
      },
    },
    content: content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default TipTap;
