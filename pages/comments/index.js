import { useState } from "react";

function commentsPage() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((item) => {
        return (
          <div key={item.div}>
            {item.id} {item.text}
          </div>
        );
      })}
    </div>
  );
}

export default commentsPage;
