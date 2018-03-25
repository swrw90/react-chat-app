import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

 export const MessageList = ({ messages }) => (
    <section id="message-list">
        <ul>
            {messages.map(message => (
                <Message
                    key={message.id}
                    { ...message }
                />
            ))}
        </ul>
    </section>
)

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}
