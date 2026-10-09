let colors = ["red", "green", "pink", "yellow", "black"];

let user = {
  name : "Nishant",
  isOnline : true
}

function printName(){
  console.log(user.name);
}

function App() {
  return (
    <>
      <div>Hello</div>
      <div>Hii</div>
      <p>{5 + 6}</p>
      <p>5 + 6</p>
      <ul>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ul>

      <p>{}</p>

      <p>{user.isOnline ? `${user.name} is online` : `${user.name} is offline`}</p>

      <button className="" onClick={printName}>Click on me</button>

      <img src="" alt="" />

      <br />

    </>
  );
}

export default App;
