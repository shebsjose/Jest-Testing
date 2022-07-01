import {cleanup, render, screen} from "@testing-library/react"
import  renderer  from "react-test-renderer";
import Todo from "../todo"

afterEach(()=>{
    cleanup();
})

describe("Testing the Example", ()=>{
    test("should render non-todo completed",()=>{
        const todo = {id: 1, title: 'wash dishes', completed :false}
    
        render(<Todo todo={todo}/>)
        // const todoElement = screen.getByTestId("todo");
        const todoElement = screen.getByTestId('todo-1');
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('wash dishes');
        expect(todoElement).not.toContainHTML('<strike>');
    })

    test("should render todo compoent",()=>{
        const todo = {id: 2, title: 'make dinner', completed :true}
    
        render(<Todo todo={todo}/>)
        const todoElement = screen.getByTestId('todo-2');
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('make dinner');
        //expect(todoElement).toContainHTML('<strike>');
    })

    // test("hello sheba",()=>{
    //     render(<Todo/>)
    //     const todo = screen.getByRole('button', {
    //         name: /hello sheba/i
    //       })
    //     expect(todo).toHaveTextContent("hello sheba")
    //     fireEvent.click(todo)

    // })
     
    test('matches snapshot', () =>{
    const todo = {id: 1, title: 'wash dishes', completed :false}
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot(); 
    })
})