import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Notice from '../notice.jsx';

storiesOf('wechat.Notice', module)
  .add('default view', () => {
    return (
      <Notice />
    );
  })
