// import { useState } from "react";
// import axios from "axios";
// import { propTypes } from "react-bootstrap/esm/Image";

// export default function Register() {
//   const [input, setInput] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const onSubmit = (event) => {
//     event.preventDefault();
//     props.register();
//   };

//   return (
//     <form onSubmit={onSubmit} className="form">
//       <input
//         type="email"
//         placeholder="Enter email..."
//         value={input.email}
//         onChange={(event) => setInput({ ...input, email: event.target.value })}
//         className="form-input"
//       />
//       <input
//         type="text"
//         placeholder="Enter username..."
//         value={input.username}
//         onChange={(event) =>
//           setInput({ ...input, username: event.target.value })
//         }
//         className="form-input"
//       />
//       <input
//         type="password"
//         placeholder="Enter password..."
//         value={input.password}
//         onChange={(event) =>
//           setInput({ ...input, password: event.target.value })
//         }
//         className="form-input"
//       />

//       <button className="btn" type="submit">
//         Register
//       </button>
//     </form>
//   );
// }
