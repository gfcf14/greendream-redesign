import React, { Fragment } from 'react';
import {
  checkComplete,
  decrementChoices,
  decrementSpins,
  incrementChoices,
  incrementSpins,
} from 'old/scripts/chooseforme.js';
import 'old/styles/old-styles.css';

export function ChooseForMe() {
  return (
    <Fragment>
      <div id='cover'></div>
      <div id='c4mwinner' class='popup w80p center'>
        <div id='c4mwq' class='regulartext white w100p pad5v'></div>
        <br />
        <div id='c4mwc' class='regulartext white w100p pad5v'></div>
        <br />
        <button id='c4magain' class='popbtn w90p'>
          AGAIN?
        </button>
      </div>
      <div id='appcontent'>
        <div id='headercontainer' class='largebottomspace'>
          <div id='homeimg'><a href='/'><img src='/old-media/smallgreendream.png' /></a></div>
          <div id='apptitle'>CHOOSE FOR ME</div>
        </div>
        <div id='c4marrow' class='inactivesection w100p center' style={{left: 0}}>
          <img src='/old-media/pointer.png' />
        </div>
        <div id='c4mwheelmenu' class='inactivesection center bgnaturalgreen' style={{border: '3px solid #00ff00', borderRadius: '20px;'}}>
          <div id='c4mquestion' class='regulartext white w100p pad5v'>
            Question:
          </div>
          <div id='c4mstandings' class='regulartext white nolinebreak left w90p pad5v'>
            Standings:
          </div>
          <div class='bottomspaced'>
            <div id='c4mchoicelist' class='nolinebreak bgwhite onlyYoverflow w90p'></div>
          </div>

          <button id='c4mspin' class='popbtn w90p'>
            SPIN!!!
          </button>
        </div>
        <div id='c4m' class='inactivesection w100p center' style={{left: 0}}>
          <img src='/old-media/pointer.png' />
        </div>
        <div id='c4mwheelcontainer' class='inactivesection'>
          <canvas id='c4mwheelcanvas'></canvas>
        </div>
        <div id='c4mmainmenu' class='bottomspaced' style={{opacity: '1', transition: 'opacity 1s'}}>
          <div class='regulartext dreamgreen left'>
            Welcome! What should we choose on?
          </div>
          <input id='c4mtopic' type='text' onChange={() => checkComplete()} onKeyPress={() => checkComplete()} class='w100p' style={{borderRadius: '5px'}} placeholder='Enter your question' />
          <br /><br />
          <div class='w100p hiddenoverflow'>
            <div class='fright'>
              <img id='c4mrem' src='/old-media/contract.png' class='grayedout' onClick={() => decrementChoices()} />
              <div class='nolinebreak regulartext dreamgreen' id='c4mchoicenum'>
                2
              </div>
              <img id='c4madd' src='/old-media/expand.png' class='handlink' onClick={() => incrementChoices()} />
            </div>
            <div class='regulartext dreamgreen left'>
              How many choices?
            </div>
          </div>
          <br />
          <div class='w100p hiddenoverflow'>
            <div id='c4mchoices' class='fright w80p'>
              <div id='c4mc1'>
                <table class='w100p'>
                  <tr>
                    <td class='regulartext dreamgreen w20p'>
                      Choice #1:
                    </td>
                    <td class='w80p'>
                      <input id='c4mct1' type='text' onChange={() => checkComplete()} onKeyPress={() => checkComplete()} class='w100p' style={{borderRadius: '5px'}} />
                    </td>
                  </tr>
                </table>
              </div>
              <div id='c4mc2'>
                <table class='w100p'>
                  <tr>
                    <td class='regulartext dreamgreen w20p'>
                      Choice #2:
                    </td>
                    <td class='w80p'>
                      <input id='c4mct2' type='text' onChange={() => checkComplete()} onKeyPress={() => checkComplete()} class='w100p' style={{borderRadius: '5px'}} />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class='regulartext dreamgreen left'>
              Please write:
            </div>
          </div>
          <br />
          <div class='w100p'>
            <div class='fright left'>
              <input id='c4mt1' type='radio' onChange={() => checkComplete()} name='Type' value='once' />First Spin
              <br />
              <input id='c4mt2' type='radio' onChange={() => checkComplete()} name='Type' value='more' />First to
              <img id='c4mcl' src='/old-media/contract.png' class='grayedout' onClick={() => decrementSpins()} />
              <div class='nolinebreak regulartext dreamgreen' id='c4mspins'>
                2
              </div>
              <img id='c4mcm' src='/old-media/expand.png' class='handlink' onClick={() => incrementSpins()} />
            </div>
            <div class='regulartext dreamgreen left'>
              Decision type:
            </div>
          </div>
          <br /><br />
          <button id='c4mstart' class='popbtn' disabled='disabled'>
            START
          </button>
        </div>
      </div>
      <div id='statsbar'></div>
    </Fragment>
  );
}

