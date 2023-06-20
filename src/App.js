import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import Color from './components/Color';


const App = () => {

  const[messageData, setMessages] = useState(chatMessages)

  const[likeCount, setLikeCount] = useState(0)

  const updateMessage = (messageToUpdate) => {
    const messages = messageData.map((message) => {

      if (messageToUpdate.liked === true) {
        setLikeCount(likeCount + 1);
      }else {
        setLikeCount(likeCount - 1);
      }
      if(message.id === messageToUpdate.id) {
        return messageToUpdate;
      }
    return message
    });

    setMessages(messages)

  }

  



  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div className='hearts-and-color'>
          <Color className='Estragon' />
          <h2>{ likeCount } 🩷s </h2>
          <Color className='Vladimir' />
        </div>
      </header>

        
      <main>
        {/* <ChatEntry sender='Vladamir' body='hey whatsup hello' timeStamp='2018-05-29T22:49:06+00:00'/> */}
        <ChatLog
        entries={ messageData }
        updateMessage={ updateMessage }
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
