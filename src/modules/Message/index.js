/**
 * messagesFilter: Determines if a message type is supported.
 * 
 * @param {Object} data Messages model object.
 * @returns {Boolean} True if a type match.
 */
export function messagesFilter(data) {
  /** Support for basic message types */
  return ['text', 'dialog'].includes(data.type);
}

/**
 * parseMessages: Parse messages object to have a good structure.
 * 
 * @param {Object} messages Messages model object.
 * @returns {Object} Parsed messages object
 */
export function parseMessages(messages) {
  return Object
    .values(messages)
    .reduce((obj, next) => {
      obj[next.key] = parseMessage(next);
      return obj;
    }, {});
}
/**
 * parseMessage: Parse message object to have a good structure.
 * 
 * @param {Object} data Message model object.
 * @returns {Object} Parsed message object
 */
export function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}

export default {
  messagesFilter,
  parseMessages,
  parseMessage,
}