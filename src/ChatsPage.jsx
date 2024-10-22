import { PrettyChatWindow } from 'react-chat-engine-pretty';
import React from 'react';
const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='d34531a3-f5f3-4850-b1ea-667d192891d2'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;