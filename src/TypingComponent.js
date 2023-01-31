import ReactTypingEffect from "react-typing-effect";

function TypingComponent(props) {
  return (
    <ReactTypingEffect
      speed={100}
      text={[props.message]}
      cursorRenderer={(cursor) => <h1>{cursor}</h1>}
      eraseDelay={0}
      eraseSpeed={0}
      displayTextRenderer={(text, i) => {
        return (
          <h1>
            {text.split("").map((char, i) => {
              return <span>{char}</span>;
            })}
          </h1>
        );
      }}
    />
  );
}
export default TypingComponent;
