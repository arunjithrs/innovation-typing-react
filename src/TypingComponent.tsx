import React from "react";
import ReactTypingEffect from "react-typing-effect";

import {
  ComponentProps,
  withStreamlitConnection,
  StreamlitComponentBase,
  Streamlit,
} from "streamlit-component-lib";

class TypingComponent extends StreamlitComponentBase {
  public constructor(props: ComponentProps) {
    super(props);
  }

  public render = (): React.ReactNode => {
    return (
      <>
        {this.props.args["message"]}
        <ReactTypingEffect
          speed={100}
          text={[this.props.args["message"]]}
          data-cursorRenderer={(cursor: any) => <h1>{cursor}</h1>}
          eraseDelay={0}
          eraseSpeed={0}
          displayTextRenderer={(text: any, i: any) => {
            return (
              <h1>
                {text.split("").map((char: any, i: any) => {
                  return <span>{char}</span>;
                })}
              </h1>
            );
          }}
        />
      </>
    );
  };
}

export default withStreamlitConnection(TypingComponent);
