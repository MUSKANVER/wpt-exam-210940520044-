import { useState } from "react";

export default function App() {
  const [message, setmessage] = useState("");
  const [messageList, setmessageList] = useState([]);
  const processmessage = (e) => {
    setmessage(e.target.value);
  };
  const handlesend = () => {
    const newList = [...messageList, message];
    setmessageList(newList);
    setmessage("");
  };

  return (
    <div>
      <header className="bg-secondary text-light p-3 fs-4 ">
        MyChatApp by Muskan verma
      </header>

      <div>
        <input
          className="form-control mt-2 p-3"
          type="text"
          value={message}
          placeholder="chat here..."
          onChange={processmessage}
        />
        <input
          className="btn btn-dark w-100 mt-2 p-2"
          type="button"
          value="send"
          onClick={handlesend}
        />
      </div>

      {messageList.map((item, index) => (
        <div className="bg-secondary bg-opacity-25 mt-2 p-2" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}