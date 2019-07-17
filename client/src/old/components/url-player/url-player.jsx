/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';
import {
  browseTxtFile,
  changeCopyImage,
  changeGuidelines,
  hideMessage,
  prepNext,
  prepPrev,
  showHelp,
  toggleButton,
  togglePlay,
} from 'old/scripts/urlplayer.js';
import 'old/styles/old-styles.css';

export function UrlPlayer() {
  return (
    <Box id='urlplayercontainer' style={{width: '100vw', height: '100vh'}}>
      <div id='cover' onClick={() => hideMessage()}></div>
      <div id='uperror' class='popup w80p center bgred'>
        <div class='subtitletext white w100p pad5v'>FILE ERROR</div>
        <br />
        <div id='uperrmessage' class='regulartext white w100p pad5v'></div>
        <br />
        <button id='upok' class='popbtn w90p' style={{background: '#880000'}} onClick={() => hideMessage()}>
          OK
        </button>
      </div>
      <div id='uphelp' class='popup w80p center'>
        <div class='subtitletext white w100p pad5v'>GETTING A TXT FILE</div>
        <br />
        <div class='regulartext white w100p pad5v'>You can quickly create a simple txt file with songs following these steps:</div>
        <br />
        <table class='w100p center regulartext white'>
          <tr>
            <td class='w33p'>
              1. Copy the URL from
              <select id='upselect' class='regulartext' onChange={() => changeCopyImage()}>
                <option>youtube</option>
                <option>soundcloud</option>
                <option>vimeo</option>
                <option>dailymotion</option>
              </select>
            </td>
            <td class='w33p'>
              2. Paste into a blank file
            </td>
            <td class='w33p'>
              3. Save with a .txt extension
            </td>
          </tr>
          <tr>
            <td class='w33p'>
              <img id='upcopy' class='w80p' style={{height: 'auto'}} src='/old-media/animated/youtube.gif' />
            </td>
            <td class='w33p'>
              <img class='w80p' style={{height: 'auto'}} src='/old-media/animated/paste.gif' />
            </td>
            <td class='w33p'>
              <img class='w80p' style={{height: 'auto'}} src='/old-media/animated/save.gif' />
            </td>
          </tr>
        </table>
        <br />
        <div class='regulartext white w100p pad5v'>Need more help? Feel free to download this sample: <Link to='/downloads/allplatforms.txt' target='_blank' download class='regulartext green'>allplatforms.txt</Link></div>
        <br />
        <div class='regulartext white w100p pad5v'>Be aware though, that if the URL doesn't exist, an error will occur. The player will then skip to the next song in five (5) seconds</div>
        <br />
        <button id='upok' class='popbtn w90p' onClick={() => hideMessage()}>
          OK
        </button>
      </div>
      <div id='uptips' class='popup w80p center'>
        <div class='subtitletext white w100p pad5v'>FILE TIPS</div>
        <div class='regulartext white w100p pad5v'>
          Since the program focuses on finding a valid URL on each text line, it is quite possible to save your files in the following way:
          <br />
          <img class='w50p' style={{height: 'auto'}} src='/old-media/adventuresample.png' />
          <br />
          This way, it's easier to know what songs you have saved, and, should they be removed from their platforms, it gives you the chance to search for them again without risking losing them. To avoid possible problems with SoundCloud, refrain from adding description to the right of the URL
        </div>
        <br />
        <button id='upok' class='popbtn w90p' onClick={() => hideMessage()}>
          OK
        </button>
      </div>
      <div id='upguidelines' class='popup w80p center'>
        <div class='subtitletext white w100p pad5v'>PLATFORM GUIDELINES</div>
        <div class='regulartext white w100p pad5v'>
          Guidelines for
          <select id='upsecguid' class='regulartext' onChange={() => changeGuidelines()}>
            <option>youtube</option>
            <option>soundcloud</option>
            <option>vimeo</option>
            <option>dailymotion</option>
          </select>
          :
          <div id='guidelines' class='left regulartext white w100p pad5v'></div>
        </div>
        <button id='upok' class='popbtn w90p' onClick={() => hideMessage()}>
          OK
        </button>
      </div>
      <div id='appcontent'>
        <div id='headercontainer' class='largebottomspace'>
          <div id='homeimg'><a href='/'><img src='/old-media/smallgreendream.png' /></a></div>
          <div id='apptitle'>URL PLAYER</div>
        </div>
        <div id='upmainmenu' style={{opacity: '1', transition: 'opacity 1s ease-in-out'}}>
          <div class='regulartext left dreamgreen'>
            Please select a file:
          </div>
          <table class='w100p' style={{textAlign: 'left'}}>
            <tr>
              <td class='w50p top bottomspaced'>
                <input id='upfilein' type='file' accept='.txt' style={{display: 'none'}} />
                <button id='upfilebtn' type='button' class='popbtn formtext w50p' onClick={() => browseTxtFile()}>Browse</button>
                <label id='upfilename' class='w50p white regulartext'></label>
                <div id='upfiledata' class='left dreamgreen regulartext'></div>
              </td>
              <td class='w50p top'>
                <div class='nolinebreak white handlink' style={{fontWeight: 'bold', fontStyle: 'italic'}} onClick={() => showHelp('get')}>
                  <div class='tablecell'>
                    <img src='/old-media/question.png' />
                  </div>
                  <div class='tablecell middle regulartext'>
                    How do I get a txt file?
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} class='w100p top bottomspaced'>
                <div class='nolinebreak white handlink' style={{fontWeight: 'bold', fontStyle: 'italic'}} onClick={() =>showHelp('tips')}>
                  <div class='tablecell'>
                    <img src='/old-media/question.png' />
                  </div>
                  <div class='tablecell middle regulartext'>
                    Click to view file tips
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} class='w100p top bottomspaced'>
                <div class='nolinebreak white handlink' style={{fontWeight: 'bold', fontStyle: 'italic'}} onClick={() => showHelp('guides')}>
                  <div class='tablecell'>
                    <img src='/old-media/question.png' />
                  </div>
                  <div class='tablecell middle regulartext'>
                    Click to view each platform's guidelines
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <br />
          <div class='regulartext left dreamgreen'>
            Play options:
          </div>
          <table class='w100p'>
            <tr>
              <td class='w33p center'>
                <img id='upimgshuffle' class='roundbutton handlink' src='/old-media/buttons/shuffle.png' onClick={() => toggleButton('shuffle')} />
              </td>
              <td class='w33p center'>
                <img id='upimgrepeat' class='roundbutton handlink' src='/old-media/buttons/repeat.png' onClick={() => toggleButton('repeat')} />
              </td>
              <td class='w33p center'>
                <img id='upimgreshuffle' class='roundbutton handlink' src='/old-media/buttons/reshuffle.png' onClick={() => toggleButton('reshuffle')} />
              </td>
            </tr>
            <tr>
              <td class='w33p center dreamgreen regulartext'>
                <div class='white'>Shuffle</div>
                <div class='dreamgreen'>the list</div>
              </td>
              <td class='w33p center dreamgreen regulartext'>
                <div class='white'>Repeat</div>
                <div class='dreamgreen'>the list forever</div>
              </td>
              <td class='w33p center regulartext'>
                <div class='white'>Reshuffle</div>
                <div class='dreamgreen'>upon list repeat</div>
              </td>
            </tr>
          </table>
          <br /><br />
          <button id='upbtn' type='button' class='popbtn formtext' disabled='disabled'>Play!</button>
        </div>
        <div id='upmusicmenu' style={{opacity: '0', transition: 'opacity 1s'}}>
          <div id='holder' class='center' style={{height: '0', border: '1px solid #007146'}}></div>
          <br />
          <div class='center'>
            <img id='prevbtn' src='' onClick={() => prepPrev()} class='roundbutton handlink' />
            <img id='playpausebtn' src='' onClick={() => togglePlay()} class='roundbutton handlink' />
            <img id='nextbtn' src='' onClick={() => prepNext()} class='roundbutton handlink' />
          </div>
          <div id='fbtndiv' class='center' style={{opacity: '0'}}>
            <img id='forcebtn' src='/old-media/buttons/forceplay.png' class='roundbutton handlink' />
          </div>
        </div>
      </div>
      <div id='statsbar'></div>
    </Box>
  );
}
/*eslint-enable */
