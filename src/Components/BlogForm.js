import React, { useState } from 'react';
import '../ResizableInput.css';
const BlogForm = ( BlogList) =>  {
  const [responses, setResponses] = useState({
    NewBlogTitle: '',
    NewBlogBody: ''
  });

  //TODO ADD ID. ADD UserID.

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResponses(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here, such as sending data to a server or displaying it on the screen
   // if()
  
  
    console.log(JSON.stringify(responses));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Blog</h3>
      <label>
       Title
        <input
          type="text"
          name="NewBlogTitle"
          value={responses.handleChange}
          onChange={handleChange}
        />
      </label>
      <br /> <br></br>
      <label>
       Body
        <textarea
          type="text"
          name="NewBlogBody"
          value={responses.NewBlogBody}
          onChange={handleChange}
          className="resizable-input"
        />
      </label>
      <br />

      <br />
      <button type="submit">Post</button>
    </form>
  );
}

export default BlogForm;