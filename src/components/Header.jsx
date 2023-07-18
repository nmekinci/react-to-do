import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Header = ({ input, setInput }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), text: inputValue, complated: false };
    
    setInput([...input, newTodo]);
    setInputValue("");
  };
  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  return (
    <>
      <h1 className="text-danger my-5">To - Do</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 container ">
          <Form.Control
            placeholder="Write something to list.."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={inputValue}
            autoFocus
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Add To List
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};
export default Header;
