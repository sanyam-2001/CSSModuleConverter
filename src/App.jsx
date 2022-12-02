import { useEffect, useState } from "react";
import convertCSSToModule from './Utils/converter';
import WaveBackground from './Background/WaveBackground'
function App() {
  const [input, setInput] = useState('');
  const [out, setOut] = useState('');
  useEffect(() => {
    setOut(convertCSSToModule(input));
  }, [input]);
  return (
    <div className="App">
      <WaveBackground />

      <div className="flex">
        <div className="mid">
          <textarea type="text" value={input} onChange={(e) => setInput(e.target.value)} spellCheck={false} placeholder="Type your Plain HTML-CSS Code Here" />
        </div>
        <div className="mid">
          <textarea type="text" value={out} spellCheck={false} placeholder="Copy converted code From here" />
        </div>
      </div>
    </div>
  );
}

export default App;
