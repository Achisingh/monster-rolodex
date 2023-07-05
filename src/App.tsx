import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchFilter = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchFilter } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchFilter}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

import getData from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchFilter = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1>Monsters</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchFilter}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// // React is loaded and is available as React and ReactDOM
// // imports should NOT be used
// const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

// class TodoList extends React.Component {
//   render() {
//     const { items, onListClick } = this.props;
//     return (<ul onClick={onListClick}>
//       {items.map((item, index) =>
//                  <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
//     </ul>);
//   }

//   handleItemClick(item, event) {
//     // Write your code here

//   }
// }

// const items = [ { text: 'Buy grocery', done: true },
//   { text: 'Play guitar', done: false },
//   { text: 'Romantic dinner', done: false }
// ];

// const App = (props) => <TodoList
//   items={props.items}
//   onListClick={(event) => console.log("List clicked!")}
//   onItemClick={(item, event) => { console.log(item, event) }}
// />;

// document.body.innerHTML = "<div id='root'></div>";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App items={items}/>);
