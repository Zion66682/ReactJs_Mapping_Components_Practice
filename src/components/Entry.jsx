import React from "react";
import Emoji from "./Emoji";
import Title from "./Title";
import Detail from "./Detail";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <Emoji icon={props.icon} />
        <Title title={props.title} />
      </dt>
      <dd>
        <Detail detail={props.detail} />
      </dd>
    </div>
  );
}

export default Entry;
