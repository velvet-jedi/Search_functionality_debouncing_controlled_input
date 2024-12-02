import "./styles.css";
import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Arpan",
  },
  {
    id: 2,
    title: "Aashi",
  },
  {
    id: 1,
    title: "Pranjal",
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  // const [filteredData, setFilteredData] = useState(""); just one state variable
  // input display in sync with input values
  // conditional rendering only when input is given
  // no additional separate search function

  // useEffect for debouncing timer

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearchValue(inputValue), 300);

    return () => clearTimeout(timer);
    // setSearchValue(null);
  }, [inputValue]);

  return (
    <div className="App">
      <div className="">
        <input
          type="text"
          placeholder="Type to search"
          value={inputValue}
          onChange={handleSearch}
        />
        <ul>
          {inputValue &&
            searchValue &&
            items
              .filter((item) =>
                item.title.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((filteredItem) => (
                <li key={filteredItem.id}>{filteredItem.title}</li>
              ))}
        </ul>
      </div>
    </div>
  );
}
