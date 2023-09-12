import { useState } from "react";
import { marked } from "marked";
import HeaderForm from "./components/header-form";
import { textStartValue } from "./components/text-start-value";

function App() {
  const [text, setText] = useState(textStartValue)

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <div className="form" id="input-form">
        <HeaderForm title="Editor" formID="editor" />
        <textarea
          id="editor"
          onChange={(event) => {setText(event.target.value)}}
          value={text}
        ></textarea>
      </div>
      <div className="form" id="preview-form">
        <HeaderForm title="Previewer" formID="preview" />
        <div
          id="preview"
          dangerouslySetInnerHTML={{__html: marked(text),}}
        ></div>
      </div>
    </div>
  );
}

export default App;
