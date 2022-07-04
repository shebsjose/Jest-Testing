import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import Products,{BuyItems} from "../product/products";
import { purchaseFunction } from "../product/api";


const items = [
    { title: "Cat Food", slug: "cat-food" },
    { title: "Dog Food", slug: "dog-food" },
    { title: "Waffles", slug: "waffles" },
  ];

// test("purchaseFunction called with correct product slug on Dog Food click", () => {
//   render(<App />);

//   // Get the specific card and bind to query functions.
//   const { DogFoodCard } = within(screen.getByText("Dog Food").parentElement);
//   console.log(DogFoodCard)

//   // Now we can click the specific button within that card.
//   userEvent.click(DogFoodCard.getByRole("button", { name: "sheba button" }));

//   expect(purchaseFunction).toHaveBeenCalledWith("dog-food");
// });



test("dasqwgsuige", ()=>{
    render(<Products items={items}/>)

})

const title ="shop"
test("dsfgesdyudtgfyuwwwwwww",()=>{
    render(<BuyItems title={title} slug={"dgfuyjswgeutg"}/>)
    const button = screen.getByTestId("sbutton")
    console.log(button)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
})