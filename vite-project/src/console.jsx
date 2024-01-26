
import React, { useState, useEffect, useRef } from 'react';


const Console = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
    }
  };

  const processCommand = (command) => {
    // Add your command processing logic here
    // For simplicity, this example echoes back the entered command
    const newOutput = [...output, { type: 'input', content: `> ${command}` }];
    setOutput(newOutput);

    // Clear the input field
    setInput('');
  };


   return (
    <div style={{ width: '300px', margin: 'auto', padding: '10px', backgroundColor: '#272727', color: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {output.map((item, index) => (
          <div key={index} style={{ color: item.type === 'input' ? '#fff' : '#0f0' }}>
            {item.content}
          </div>
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        placeholder="Console"
        style={{
          width: '100%',
          padding: '8px',
          marginTop: '50px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#444',
          color: '#fff',
          outline: 'none',
          boxSizing: 'border-box',
          fontFamily: "'Courier New', Courier, monospace",
        }}
      />
    </div>
  );
};

export default Console;
