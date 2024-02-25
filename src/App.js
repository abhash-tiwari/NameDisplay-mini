// import React, { useState } from "react";

// const BasicForm = () => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [allEntry, setAllEntry] = useState([]);
//   const submitForm = (e) => {
//     e.preventDefault();
//     const newEntry = {
//       id: new Date().getTime().toString(),
//       Email: email,
//       Password: pass,
//     };
//     setAllEntry([...allEntry, newEntry]);
//     setEmail("");
//     setPass("");
//   };
//   return (
//     <div>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <h1>Full Name Display</h1>
//           <label htmlFor="email">First Name</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Last Name</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {allEntry.map((ele) => {
//           const { id, Email, Password } = ele;
//           return (
//             <div key={id}>
//               <p>Full Name :{Email} {Password}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default BasicForm;

import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [allEntries, setAllEntries] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }
    const newEntry = {
      firstName: firstName,
      lastName: lastName,
    };
    setAllEntries([...allEntries, newEntry]);
    // setFirstName("");
    // setLastName("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        
          <h1>Full Name Display</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
       

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
    

        <button type="submit">Submit</button>
      </form>

      
        {allEntries.map((entry) => (
          // <div key={entry.id}>
            <p>Full Name: {entry.firstName} {entry.lastName}</p>
          // </div>
        ))}
     
    </div>
  );
};

export default App;
