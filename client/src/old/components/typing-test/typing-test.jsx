/*eslint-disable */
import React, { Fragment } from 'react';
import { startTypingTest } from 'old/scripts/typingtest.js';
import 'old/styles/old-styles.css';

export function TypingTest() {
  return (
    <Fragment>
      <div id='appcontent'>
        <div id='headercontainer' class='largebottomspace'>
          <div id='homeimg'>
            <a href='/'>
              <img src='/old-media/smallgreendream.png' />
            </a>
          </div>
          <div id='apptitle'>TYPING TEST</div>
        </div>
        <div class='regulartext'>
          Instructions: Click on <div class='dreamgreen nolinebreak'>START</div> to start the test. You must type as many words as you can from the left container onto the right container in 1 minute.
        </div>
        <br />
        <div class='w100p'>
          <div id='startttbtn' class='popbtn' onClick={() => startTypingTest()}>START</div>
        </div>
        <br />
        <table class='w100p tablecenter'>
          <tr>
            <td class='regulartext w50p'>
              TEXT TO TYPE
            </td>
            <td class='regulartext w50p'>
              TYPE HERE
            </td>
          </tr>
          <tr>
            <td class='w50p'>
              <div id='sampletext' class='regulartext nonselectable onlyYoverflow' style={{width: '98%', minHeight: '250px', background: '#dddddd'}} oncontextmenu='return false;'></div>
            </td>
            <td class='w50p'>
              <textarea id='yourtext' class='regulartext nonselectable' style={{width: '98%', minHeight: '250px'}} oncontextmenu='return false;'></textarea>
            </td>
          </tr>
        </table>
        <br />
        <div id='ttresult' style={{display: 'none'}} class='w100p dreamgreen regulartext'>
          GET YOUR RESULTS ON YOUR EMAIL!
          <br /><br />
          <div id='tterrormsg' class='errormessage formtext'>Enter a valid email</div>
          <div id='ttinfo' class='nolinebreak'>
            Your email: <input id='youremail' />&nbsp;<button type='button' id='sendresbtn' class='textbtn' disabled='disabled'>SEND</button>
          </div>
        </div>
      </div>
      <div id='statsbar'></div>
    </Fragment>
  );
}

