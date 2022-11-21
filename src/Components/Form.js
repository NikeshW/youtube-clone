import React, { useState } from "react";


const Form = () => {
  const [user, setUser] = useState({
    name: "",
    comment: "",
  });

  const [usercomment, setUserComment] = useState({});

  const [commentList, setCommentList ]= useState([])





  const handleSubmit = (e) => {
    e.preventDefault();
    setUserComment({ name: user.name, comment: user.comment });
    setCommentList(usercomment)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
            id="name"
          />
        </label>
        <label htmlFor="comment">
          Comment
          <input
            type="text"
            value={user.comment}
            onChange={(e) => {
              setUser({
                ...user,
                comment: e.target.value,
              });
            }}
            id="comment"
          />
        </label>
        {/* <p>
        {user.name}{' '}
        {user.comment}{' '}
        
      </p> */}
        <ul>
          <li>
            <h4>{usercomment.name} </h4>

            <p> {usercomment.comment} </p>
          </li>
        </ul>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
