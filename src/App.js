import "./App.css";
import ApiCall from './components/mockFunction/apiCall';
// import Todo from "./components/todo/todo";
 import Products from "./components/product/products";

function App() {
  // const todos = [
  //  {id: 1, title: 'wash dishes', completed :false},
  //  {id: 2, title: 'make dinner', completed :true},
  // ]

  const items = [
    { title: "Cat Food", slug: "cat-food" },
    { title: "Dog Food", slug: "dog-food" },
    { title: "Waffles", slug: "waffles" },
  ];
  return (
    // <div className="App">
    //   {todos.map((todo)=>{
    //     return <Todo todo={todo}/>
    //   })}
    // </div>
    // -----------------------------------------------------------------------------------------

    <div className="app">
      <h1>Shop</h1>
      <Products items={items} />
    </div>
    // -----------------------------------------------------------------------------------------
    // <>
    // <ApiCall/>
    // </>
    // -----------------------------------------------------------------------------------------
  );
}

export default App;
