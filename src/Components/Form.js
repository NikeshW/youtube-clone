import React, { useState } from "react";

const Form = ({commentList, setCommentList}) => {
  const [user, setUser] = useState({
    name: "",
    comment: "",
  });

 

  console.log(commentList);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCommentList([
      ...commentList,
      { name: user.name, comment: user.comment },
    ]);
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
          <br />
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
      
        <ul>
          {commentList.map((comment, i) => (
            <li key={i}>
              <h4>{comment.name} </h4>

              <p> {comment.comment} </p>
            </li>
          ))}
        </ul>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
