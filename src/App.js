import "./styles.css";
import useInput from "./useInput";

export default function App() {
  const [firstName, bindFirstName, setFirstName] = useInput("");
  const [lastName, bindLastName, setLastName] = useInput("");

  const submitHandler = function () {
    setFirstName();
    setLastName();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" placeholder="first" {...bindFirstName} />
      <input type="text" placeholder="last" {...bindLastName} />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}
