import React from 'react';
import { Box } from 'rebass';
import {
  startGame,
  showInst,
  showAb,
  highlight,
  togglePause,
  toggleSound,
  back,
  setLevelVotes,
  cont,
} from 'old/scripts/votebuster';
import 'old/styles/old-styles.css';

export function VoteBuster() {
  return (
    <Box id='votebustercontainer' style={{width: '100vw', height: '100vh'}}>
      <div id='content' style={{textAlign: 'center', userSelect: 'none'}}>
        <div id='canvas' style={{display: 'inline-block', width: '1000px', height: '600px', background: '#6495ed'}}>
          <img id='curtains' src='/old-media/votebuster/backgrounds/curtains.png' style={{position: 'relative', opacity: '0', visibility: 'hidden'}} />
          <img id='about' src='/old-media/votebuster/backgrounds/aboutbg.png' style={{position: 'absolute', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />
          <img id='instructions' src='/old-media/votebuster/backgrounds/instructionsbg.png' style={{position: 'absolute', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />

          <img id='final1' src='/old-media/votebuster/labels/final1.png' style={{position: 'absolute', zIndex: '98', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />
          <img id='final2' src='/old-media/votebuster/labels/final2.png' style={{position: 'absolute', zIndex: '98', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />
          <img id='final3' src='/old-media/votebuster/labels/final3.png' style={{position: 'absolute', zIndex: '98', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />
          <img id='final4' src='/old-media/votebuster/labels/final4.png' style={{position: 'absolute', zIndex: '98', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />
          <img id='final5' src='/old-media/votebuster/labels/final5.png' style={{position: 'absolute', zIndex: '98', top: '0px', left: '0px', opacity: '0', visibility: 'hidden'}} />

          {/* <!--THIS LOAD SCREEN CAN BE USED FOR ANY NEW GAME--> */}
          <div id='loadscreen' style={{position: 'absolute', top: '0px', left: '0px', opacity: '0'}}>
            <img src='/old-media/dream.png' />
            <div id='loadtext' style={{fontSize: '40px', color: '#ffffff', textShadow: '2px 2px #000000'}}>LOADING!!!</div>
            <div id='statusloadbottom' style={{display: 'inline-block', textAlign: 'left', textIndent: '5px', opacity: '0', width: '400px', height: '40px', background: '#000000', borderRadius: '40px'}}>
              <div id='statusloadtop' style={{opacity: '0', position: 'relative', top: '5px', left: '5px', width: '0px', height: '30px', background: 'linear-gradient(#008000, #00cc00, #008000)', borderRadius: '30px'}} />
            </div>
          </div>

          <div id='mainmenuscreen' style={{opacity: '0'}}>
            <img src='/old-media/votebuster/labels/votebusterlogo.png' style={{position: 'absolute', top: '0px', transform: 'translate(-50%, 25%)'}} />
            <div id='mainmenubuttons' style={{width: '1000px', textAlign: 'center', position: 'absolute', top: '0px'}}>
              <img class='vbbutton' src='/old-media/votebuster/buttons/startgame.png' onClick={() => startGame()} /><br />
              <img class='vbbutton' src='/old-media/votebuster/buttons/instructions.png' onClick={() => showInst()} /><br />
              <img class='vbbutton' src='/old-media/votebuster/buttons/about.png' onClick={() => showAb()} /><br /><br />
              <img id='soundbtn' class='vbbutton' src='/old-media/votebuster/buttons/soundenabled.png' onClick={() => toggleSound()} />
            </div>
          </div>

          <div id='selectscreen' style={{position: 'absolute', top: '0px', opacity: '0', visibility: 'hidden'}}>
            <div style={{color: '#008000', fontSize: '40px', fontWeight: 'bold', width: '1000px', textAlign: 'center'}}>
              PLEASE SELECT YOUR CANDIDATE
            </div>
            <br /><br />
            <table style={{width: '90%', margin: '0px auto'}}>
              <tr>
                <td style={{width: '50%', textAlign: 'center', paddingBottom: '30px'}}>
                  <div style={{color: '#008000', fontSize: '20px'}}>
                    <img id='selo' src='/old-media/votebuster/candidates/obamaselect.png' style={{border: '45px solid rgba(0, 128, 0, 0)'}} onClick={() => highlight('o')} />
                  </div>
                </td>
                <td style={{width: '50%', textAlign: 'center', paddingBottom: '30px'}}>
                  <img id='selr' src='/old-media/votebuster/candidates/romneyselect.png' style={{border: '45px solid rgba(0, 128, 0, 0)'}} onClick={() => highlight('r')} />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <table>
                    <tr>
                      <td>
                        <div style={{color: '#008000', fontSize: '30px', fontWeight: 'bold'}}>
                          Your candidate:
                        </div>
                      </td>
                      <td >
                        <div id='candidate' style={{color: '#008000', fontSize: '30px', fontWeight: 'bold'}} />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>

          <div id='nextlevelscreen' style={{paddingTop: '65px', width: '1000px', textAlign: 'center', position: 'absolute', top: '0px', opacity: '0', visibility: 'hidden'}}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <div id='statetitle' style={{boxShadow: '10px 10px 50px #000000', height: '70px', display: 'inline-block', background: 'linear-gradient(to bottom, #008000 0%, #000000 75%)', color: '#ffffff', borderRadius: '10px', lineHeight: '70px', fontWeight: 'bold'}} />
              <table id='statepicanddesc' style={{margin: '0px auto', paddingTop: '15px'}}>
                <tr>
                  <td>
                    <img id='stateimage' src='/old-media/votebuster/states/arizona.png' />
                  </td>
                  <td id='statebox' style={{width: '300px', height: '300px', display: 'inline-block', background: '#008000', color: '#ffffff', border: '5px solid #000000', fontSize: '13px'}}>
                    <div id='lvldesc' />
                    <br /><br />
                    <div id='lvlvotes' />
                    <br /><br /><br /><br />
                    <div>2ND HALF VOTE PREDICTIONS:</div>
                    <br /><br />
                    <div id='2vyou' />
                    <div id='2vopp' />
                    <div id='2vspe' />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div id='gamescreen' style={{width: '1000px', height: '600px', position: 'absolute', top: '0px', opacity: '0', visibility: 'hidden', overflow: 'hidden'}}>
            <img id='timeuplabel' src='/old-media/votebuster/labels/timeup.png' style={{position: 'relative', zIndex: '99', top: '150px', opacity: '0', visibility: 'hidden'}} />
            <img id='pauselabel' src='/old-media/votebuster/labels/pause.png' style={{position: 'absolute', zIndex: '99', top: '150px', left: '250px', opacity: '0', visibility: 'hidden'}} />
            <img id='gameflag' src='' style={{position: 'absolute', top: '0px', left: '800px'}} />
            <div id='middlegamebar' style={{width: '10px', height: '600px', position: 'absolute', top: '0px', left: '490px', background: '#640064', opacity: '0', visibility: 'hidden'}} />
            <div id='statsgamebar' style={{width: '1000px', height: '100px', position: 'absolute', zIndex: '2', top: '500px', background: '#008000'}}>
              <table style={{width: '100%'}}>
                <tr>
                  <td style={{width: '20%', color: '#ffffff', verticalAlign: 'middle', fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}>
                    TIME:&nbsp;<div id='statstime' style={{display: 'inline-block'}}>2:00</div>
                  </td>
                  <td style={{width: '20%', textAlign: 'center'}}>
                    <table>
                      <tr>
                        <td style={{width: '50%'}}>
                          <img id='statsobamaface' src='' />
                        </td>
                        <td style={{width: '50%', color: '#ffffff', verticalAlign: 'middle', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                          =&nbsp;<div id='statsobamavotes' style={{display: 'inline-block'}}>0</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style={{width: '20%', textAlign: 'center'}}>
                    <table>
                      <tr>
                        <td style={{width: '50%'}}>
                          <img id='statsromneyface' src='' />
                        </td>
                        <td style={{width: '50%', color: '#ffffff', verticalAlign: 'middle', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                          =&nbsp;<div id='statsromneyvotes' style={{display: 'inline-block'}}>0</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style={{width: '20%', color: '#ffffff', verticalAlign: 'middle', fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}>
                    LEVEL&nbsp;<div id='statslvl' style={{display: 'inline-block'}}>1</div>
                  </td>
                  <td style={{width: '20%', color: '#ffffff', verticalAlign: 'middle', fontWeight: 'bold', textAlign: 'center', fontSize: '30px'}}>
                    <img id='pausebtn' src='/old-media/buttons/pause.png' style={{width: '50px', height: '50px'}} onClick={() => togglePause()} />
                  </td>
                </tr>
              </table>
              {/* <!--the votes get created here!--> */}
            </div>
          </div>

          <div id='resultsscreen' style={{width: '1000px', height: '600px', position: 'absolute', top: '0px', opacity: '0', visibility: 'hidden'}}>
            <table style={{width: '100%'}}>
              <tr>
                <td style={{width: '50%'}}>
                  <br /><br /><br />
                  <div style={{display: 'inline-block', color: '#008000', fontWeight: 'bold', fontSize: '40px'}}>LEVEL <div id='levelnumber' style={{display: 'inline-block'}} /> RESULTS:</div>
                  <br /><br /><br />
                  <table style={{width: '90%'}}>
                    <tr>
                      <td style={{width: '34%', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        VOTES
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        OBAMA
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        ROMNEY
                      </td>
                    </tr>
                    <tr>
                      <td style={{width: '34%', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        1ST HALF
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#0000ff', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='obama1h' style={{opacity: '0'}} />
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#0000ff', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='romney1h' style={{opacity: '0'}} />
                      </td>
                    </tr>
                    <tr>
                      <td style={{width: '34%', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        2ND HALF
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#0000ff', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='obama2h' style={{opacity: '0'}} />
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#0000ff', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='romney2h' style={{opacity: '0'}} />
                      </td>
                    </tr>
                    <tr>
                      <td style={{width: '34%', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        SHOT
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#ff0000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='obamasv' style={{opacity: '0'}} />
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#ff0000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='romneysv' style={{opacity: '0'}} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{borderBottom: '5px solid #008000'}}></td>
                    </tr>
                    <tr>
                      <td style={{width: '34%', color: '#008000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        TOTAL
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#ffffff', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='obamat' style={{opacity: '0'}} />
                      </td>
                      <td style={{width: '33%', textAlign: 'right', color: '#ffffff', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>
                        <div id='romneyt' style={{opacity: '0'}} />
                      </td>
                    </tr>
                  </table>
                  <br />
                  <div id='pred2h' style={{opacity: '0'}}>
                    <div style={{color: '#ff0000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}}>2ND HALF VOTE PREDICTIONS:</div>
                    <div style={{color: '#ff0000', fontWeight: 'bold', fontSize: '30px', paddingBottom: '10px'}} id='votepred'></div>
                  </div>
                </td>
                <td style={{width: '50%'}}>
                  <img id='levelverdict' src='/old-media/votebuster/labels/win.png' style={{opacity: '0'}} />
                  <br />
                  <table style={{width: '100%'}}>
                    <tr>
                      <td style={{width: '50%'}}>
                        <img id='obamaverdict' src='/old-media/votebuster/candidates/obamawin.png' style={{opacity: '0'}} />
                      </td>
                      <td style={{width: '50%'}}>
                        <img id='romneyverdict' src='/old-media/votebuster/candidates/romneylose.png' style={{opacity: '0'}} />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>

          <div id='finalscreen' style={{width: '1000px', height: '600px', position: 'absolute', top: '0px', opacity: '0', visibility: 'hidden', overflow: 'hidden'}}>
            <div id='finalholder' style={{position: 'absolute', top: '1200px'}}>
              <img src='/old-media/votebuster/backgrounds/finalbg.png' style={{position: 'absolute'}} />
              <img id='wethepeople' src='/old-media/votebuster/backgrounds/peoplenormal.png' style={{position: 'absolute', top: '90px'}} />
              <img id='barackobama' src='/old-media/votebuster/candidates/obamaexcited.png' style={{position: 'absolute', top: '0px', left: '0px'}} />
              <img id='mittromney' src='/old-media/votebuster/candidates/romneyexcited.png' style={{position: 'absolute', top: '0px', left: '0px'}} />
              <img id='garyjohnson' src='/old-media/votebuster/candidates/garyjohnson.png' style={{position: 'absolute', top: '0px', left: '0px'}} />
              <img id='podium' src='/old-media/votebuster/objects/podium.png' style={{position: 'absolute', zIndex: '2', top: '0px', left: '0px'}} />
              <div id='finalbar' style={{width: '1000px', height: '101px', position: 'absolute', zIndex: '2', top: '499px', background: '#008000', color: '#ffffff', textAlign: 'left', padding: '10px'}} />
            </div>
          </div>

          <div id='actionbuttons'>
            <img id='backbtn' class='vbbutton' src='/old-media/votebuster/buttons/back.png' onClick={() => back()} style={{position: 'absolute', top: '0px', left: '0px', opacity: '0', zIndex: '99', visibility: 'hidden'}} />
            <img id='nxtbtn' class='vbbutton' src='/old-media/votebuster/buttons/nextlevel.png' onClick={() => setLevelVotes()} style={{position: 'absolute', top: '0px', left: '0px', zIndex: '99', opacity: '0', visibility: 'hidden'}} />
            <img id='contbtn' class='vbbutton' src='/old-media/votebuster/buttons/continue.png' onClick={() => cont()}  style={{position: 'absolute', top: '0px', left: '0px', zIndex: '99', opacity: '0', visibility: 'hidden'}} />
          </div>
        </div>
      </div>
    </Box>
  );
}

