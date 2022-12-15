import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function createEntity(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      icon={emojipedia.emoji}
      title={emojipedia.name}
      detail={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createEntity)}</dl>
      {/*
      <dl className="dictionary">
        <Entity
          icon={Emojipedia[0].emoji}
          title={Emojipedia[0].name}
          detail={Emojipedia[0].meaning}
        />
        <Entity
          icon={Emojipedia[1].emoji}
          title={Emojipedia[1].name}
          detail={Emojipedia[1].meaning}
        />
        <Entity
          icon={Emojipedia[2].emoji}
          title={Emojipedia[2].name}
          detail={Emojipedia[2].meaning}
        />
      </dl>
      */}
    </div>
  );
}

export default App;
