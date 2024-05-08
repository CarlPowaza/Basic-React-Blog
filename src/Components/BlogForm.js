import React, { useState } from 'react';
import '../ResizableInput.css';
const BlogForm = ( BlogList) =>  {
  const [blogPosts, setBlogPosts] = useState({
    NewBlogTitle: '',
    NewBlogBody: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogPosts(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(JSON.stringify(blogPosts));

    // SETUP A CHECK FOR IT THE ITEM EXISTS IN STORAGE










  };




  return (
    <form onSubmit={handleSubmit}>
      <h3>New Blog</h3>
      <label>
       Title
        <input
          type="text"
          name="NewBlogTitle"
          value={blogPosts.handleChange}
          onChange={handleChange}
        />
      </label>
      <br /> <br></br>
      <label>
       Body
        <textarea
          type="text"
          name="NewBlogBody"
          value={blogPosts.NewBlogBody}
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