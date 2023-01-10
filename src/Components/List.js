const DUMMY_LIST = [
  { id: 1, title: "Task 1", text: "Some gibberish" },
  { id: 2, title: "Task 2", text: "Some gibberish" },
  { id: 3, title: "Task 3", text: "Some gibberish" },
];

const List = () => {
  return (
    <ul>
      {DUMMY_LIST.map((item) => (
        <li>
          <h1>{item.title}</h1>
          <hp>{item.text}</hp>
        </li>
      ))}
    </ul>
  );
};

export default List;
