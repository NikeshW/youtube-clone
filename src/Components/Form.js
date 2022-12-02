import React, { useState } from "react";
import "./Form.css"

const Form = ({commentList, setCommentList}) => {
  const [user, setUser] = useState({
    name: "",
    comment: "",
  });

  // console.log(commentList);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCommentList([
      ...commentList,
      { name: user.name, comment: user.comment },
    ]);
    setUser({name: "", comment: ""})
  };

  return (
    <div className="form">
      <div className="form-content">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">
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
        <label className="form-label" htmlFor="comment">
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
        </label><br/>

        <button className="formsumbit">Submit</button>
      </form>
      <ul className="ul-listyle" style={{listStyle: "none"}}>
          {commentList.map((comment, i) => (
            <li className="li-box" key={i}>
              <h4 className="formh4">{comment.name} </h4>

              <p className="form-p"> {comment.comment} </p>
            </li>
          ))}
        </ul>
      </div>
      
      
    </div>
  );
};

export default Form;
