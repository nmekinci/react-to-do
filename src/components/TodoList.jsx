import ListGroup from "react-bootstrap/ListGroup";
import { BsFillFileExcelFill } from "react-icons/bs";
// import { useState } from "react";


const TodoList = ({ input, setInput }) => {
  // const [isUnderline, setIsUnderline] = useState(false);
  const handleClick = (id) => {
    // console.log(i);
    setInput(input.filter((item) => item.id !== id));
  };
  const handleDouble = (id) => {
    // setIsUnderline(!isUnderline);
    setInput(input.map( (item) => item.id === id ? {...item, complated: !item.complated}  : item ))
    // console.log("works");
  };

  return (
    <>
  {input.map((item) => {
        if (!item.text || item.text.trim() === "") {
          return null;
        }
        return (
          <ListGroup
            key={item.id}
            className="container my-2"
            onDoubleClick={() => handleDouble(item.id)}
          >
            <ListGroup.Item
              className="d-flex justify-content-around align-items-center"
              variant="light"
            >
              <p className={item.complated 
              ? "text-decoration-line-through text-danger"
              : "text-decoration-none"}>{item.text}</p>
              <BsFillFileExcelFill
                onClick={() => handleClick(item.id)}
                className=" text-warning fs-3"
              />
            </ListGroup.Item>
          </ListGroup>
        );
      })}



      {/* {input.map((item) => (
        <ListGroup
          key={item.id}
          className="container my-2"
          onDoubleClick={() => handleDouble(item.id)}
        >
          <ListGroup.Item
            className="d-flex justify-content-around align-items-center"
            variant="light"
          >
            <p className={item.complated ? "underscore" : ""}>{item.text}</p>
            <BsFillFileExcelFill
              onClick={() => handleClick(item.id)}
              className=" text-warning fs-3"
            />
          </ListGroup.Item>
        </ListGroup>
      ))} */}
    </>
  );
};

export default TodoList;
