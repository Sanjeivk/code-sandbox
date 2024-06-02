// src/App.tsx
import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';

const App = () => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleResponse = async (response: Response) => {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return data.output;
  };

  const testCode = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/test-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const output = await handleResponse(response);
      setOutput(output);
    } catch (error) {
      setOutput(`Error: ${(error as Error).message}`);
    }
  };

  const submitCode = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/submit-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const output = await handleResponse(response);
      setOutput(output);
    } catch (error) {
      setOutput(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl mb-4">Python Code Execution</h1>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-2" style={{ maxWidth: '600px' }}>
          <CodeEditor code={code} setCode={setCode} />
        </div>
        <div className="w-full md:w-1/2 p-2" style={{ maxWidth: '600px' }}>
          <div className="bg-white p-4 rounded shadow-md h-full">
            <h2 className="text-xl mb-2">Output</h2>
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button onClick={testCode} className="px-4 py-2 bg-blue-500 text-white rounded">Test Code</button>
        <button onClick={submitCode} className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
      </div>
    </div>
  );
};

export default App;
