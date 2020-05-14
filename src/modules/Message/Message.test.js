import{ messagesFilter, parseMessages, parseMessage } from './index';

describe('Message modules', () => {

  describe('messagesFilter()', () => {
    it('Should return true if data.type match', () => {
      expect(messagesFilter({ type: 'text' })).toBe(true);
      expect(messagesFilter({ type: 'dialog' })).toBe(true);
    });

    it('Should return false for unmatch data.type', () => {
      expect(messagesFilter({ type: 'test' })).toBe(false);
      expect(messagesFilter({ type: 'pepito' })).toBe(false);
    });
  });

  describe('parseMessages()', () => {
    it('Should parse all the messages', () => {
      const messages = {
        a: {
          chat: 36089395,
          key: 'a',
          message: 'test',
          read: false,
        },
      }
      const result = {
        a: {
          author: 'user',
          key: 'a',
          text: 'test',
          timestamp: undefined,
          type: undefined,
        },
      };
      expect(parseMessages(messages)).toEqual(result);
    });
  });

  describe('parseMessage()', () => {
    it('Should parse a message', () => {
      const message = {
        chat: 36089395,
        key: 'a',
        message: 'test',
        read: false,
      }
      const result = {
        author: 'user',
        key: 'a',
        text: 'test',
        timestamp: undefined,
        type: undefined,
      };
      expect(parseMessage(message)).toEqual(result);
    });
  });

});