// src/components/CodeEditor.tsx
import React from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }: { code: string; setCode: (code: string) => void }) => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="python"
      defaultValue={code}
      onChange={(value) => setCode(value || '')}
    />
  );
};

export default CodeEditor;
