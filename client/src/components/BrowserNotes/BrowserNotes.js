import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span>Everything in this site work best in <b>Chrome!</b></span>
      </Browser>
      <Browser only firefox>
        <span>You should try this in <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;
