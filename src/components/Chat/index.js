import React, { useState, useEffect } from 'react';

import {
  Body,
  Button,
  Footer,
  Header,
  Input,
  Message,
} from '../../atoms';
import { MessageModules } from '../../modules';

var core = new window.Landbot.Core({
  firebase: window.firebase,
  brandID: 12235,
  channelToken: 'H-441480-B0Q96FP58V53BJ2J',
  welcomeUrl: 'https://welcome.landbot.io/',
  welcome: [
    { samurai: -1, type: 'text', message: 'Type something to start a conversation with landbot.' }
  ],
});

export default function Chat() {
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState('');

  useEffect(() => {
    core.pipelines.$readableSequence.subscribe(data => {
      setMessages(messages => ({
        ...messages,
        [data.key]: MessageModules.parseMessage(data),
      }))
    });

    core
      .init()
      .then(data => {
        setMessages(
          MessageModules.parseMessages(data.messages)
        );
      });
  }, []);

  useEffect(() => {
    const container = document.getElementById('landbot-messages-container');
    scrollBottom(container);
  }, [messages]);

  const submit = () => {
    if (input !== '') {
      core.sendMessage({ message: input });
      setInput('');
    }
  };

  return (
    <>
      <Header>Landbot</Header>

      <Body>
        {Object.values(messages)
          .filter(MessageModules.messagesFilter)
          .sort((a, b) => a.timestamp - b.timestamp)
          .map(message => (
            <Message
              author={message.author}
              key={message.key}
              text={message.text}
            />
          ))
        }
      </Body>

      <Footer>
        <Input
          onChange={e => setInput(e.target.value)}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="Type here..."
          value={input}
        />
        <Button
          icon="fas fa-paper-plane fa-lg"
          onClick={submit}
          disabled={input === ''}
        />
      </Footer>
    </>
  );
}

function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
}