import React, { useState, useEffect, useRef } from 'react';

function SpaceName() {
  const [userInput, setUserInput] = useState('');

  // Load stored data from local storage when the component mounts
  useEffect(() => {
    const storedInput = localStorage.getItem('userInput');
    if (storedInput) {
      setUserInput(storedInput);
    }
  }, []);

  // Update local storage whenever userInput changes
  useEffect(() => {
    localStorage.setItem('userInput', userInput);
  }, [userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="SpaceName">
      <textarea
        className="editable-div"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Space's Name"
        maxLength={20}
        spellCheck='false'
      />
    </div>
  );
}


export default SpaceName;
