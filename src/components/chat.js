import { Button, Card, CardContent, Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../config";
import { ProductContext } from "../productContext";
import "./chat.css";

const Chat = () => {
  const url = app_config.api_url;
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const [message, setMessage] = useState("");

  const { currentUser } = useContext(ProductContext);

  const [messageList, setMessageList] = useState([
    // { text: "Hello, bhai kya padh rhe ho", created: new Date(), sent: false },
    // {
    //   text: "abhi kuch nhi padha, syllabus dekhna hai",
    //   created: new Date(),
    //   sent: true,
    // },
    // { text: "accha to bata dena", created: new Date(), sent: false },
  ]);

  useEffect(() => {
    socket.connect();
  }, []);

  socket.on("recmsg", (data) => {
    console.log(data);
    setMessageList([...messageList, data]);
  });

  const sendMessage = () => {
    const obj = {
      text: message,
      created: new Date(),
      sent: true,
      user: currentUser.username,
    };
    socket.emit("sendmsg", obj);
    setMessageList([...messageList, obj]);
    setMessage("");
  };

  const showUser = () => {
    if (currentUser.username) {
      return <p className="user">{currentUser.username}</p>;
    } else {
      return <p className="user">Unknown User</p>;
    }
  };

  const showMessages = () => {
    return messageList.map((msgObj) => (
      <div className={msgObj.sent ? "sent-msg message" : "rec-msg message"}>
        <p className="msg-user">{msgObj.user}</p>
        <p>{msgObj.text}</p>
        <p className="time">{msgObj.created.toLocaleString()}</p>
      </div>
    ));
  };

  return (
    <div className="chat-back">
      <h1 className="mt-5">Chat Component</h1>
      <Container>
        <Card>
          <CardContent>
            {showUser()}
            <div className="chat-area">{showMessages()}</div>
            <div className="input-group">
              <input
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="contained" onClick={sendMessage}>
                Send &nbsp; <i class="fas fa-paper-plane"></i>{" "}
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Chat;