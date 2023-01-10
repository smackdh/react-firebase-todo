function App() {
  const DUMMY_LIST = [
    { id: 1, title: "Task 1", text: "Some gibberish" },
    { id: 2, title: "Task 2", text: "Some gibberish" },
    { id: 3, title: "Task 3", text: "Some gibberish" },
  ];

  return (
    <div className="">
      <h1>Title</h1>
      <div>
        <h2>List</h2>
        <ul>
          {DUMMY_LIST.map((item) => (
            <li>
              <h1>{item.title}</h1>
              <hp>{item.text}</hp>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
