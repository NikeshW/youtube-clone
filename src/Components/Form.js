import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    comment: "",
  });

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          // value={user.firstName}
          // onChange={handleTextChange}
          id="firstName"
        />
        <label htmlFor="comment">Comment </label>

        <input
          type="text"
          // value={user.lastName}
          // onChange={handleTextChange}
          id="lastName"
        />
      </form>
    </div>
  );
};

export default Form;
