import React, { useState, useEffect } from 'react';

import {
  Body,
  Button,
  Footer,
  Header,
  Input,
  Message,
} from '../../../../components';

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
        [data.key]: parseMessage(data),
      }))
    });

    core
      .init()
      .then(data => {
        setMessages(
          parseMessages(data.messages)
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
          .filter(messagesFilter)
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

function parseMessages(messages) {
  return Object
    .values(messages)
    .reduce((obj, next) => {
      obj[next.key] = parseMessage(next);
      return obj;
    }, {});
}

function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}

function messagesFilter(data) {
  /** Support for basic message types */
  return ['text', 'dialog'].includes(data.type);
}

function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
}