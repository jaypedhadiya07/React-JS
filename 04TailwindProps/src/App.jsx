import Card from "./Components/Card";
import "./index.css";

const myObj = {
  name: "jay",
  age: 20,
};
const myArr = [10, 20, 30, 40];
function App() {
  return (
    <>
      <Card name="Jay" btnText="Read more" />
      <Card name="Yash" />
    </>
  );
}

export default App;
