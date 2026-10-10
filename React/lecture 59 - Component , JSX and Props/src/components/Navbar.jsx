// console.log(5);
function Navbar({ user = { isLoggedIn: false, name: "Anonymous" } }) {
  console.log(user);
  const { isLoggedIn, name } = user;
  //   console.log(4);
  return (
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>About us</li>
      {/* conditional rendering */}
      <li>{isLoggedIn ? name : "Login"}</li>
    </ul>
  );
}

function random(val = {}){}
export default Navbar;
