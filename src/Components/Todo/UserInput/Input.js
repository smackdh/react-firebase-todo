const Input = () => {
  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value="{title}" onChange="" />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" value="{description}" onChange="" />
      </form>
    </div>
  );
};

export default Input;
