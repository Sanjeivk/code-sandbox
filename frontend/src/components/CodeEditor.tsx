// src/components/CodeEditor.tsx
import React from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }: { code: string; setCode: (code: string) => void }) => {
  return (
    <Editor
      height="70vh"
      defaultLanguage="python"
      defaultValue={code}
      onChange={(value) => setCode(value || '')}
      options={{
        fontSize: 16,
        minimap: { enabled: false },
        scrollbar: {
          vertical: 'auto',
          horizontal: 'auto'
        },
      }}
      // width="100%"
    />
  );
};

export default CodeEditor;
