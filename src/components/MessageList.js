import React from 'react';
import PropTypes from 'prop-types';

const MessagesList = ({ messages }) => (
    <section id="message-list">
        <ul>
            {messages.map(message => (
                <Messages
                    key={message.id}
                    { ...message }
                />
            ))}
        </ul>
    </section>
)

Messages.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: Proptypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessageList;