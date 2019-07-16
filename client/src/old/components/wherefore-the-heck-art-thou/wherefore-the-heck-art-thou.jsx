import React from 'react';
import $ from 'jquery';
import { Box } from 'rebass';
import { getStarted } from 'old/scripts/whereforetheheckartthou';
import 'old/styles/old-styles.css';

$(() => {
  var canvasLeft = ($(window).innerWidth() / 2) - 400;
  if ($('#whereforetheheckartthoucontainer').length) {
    document.getElementById("canvas").setAttribute("style", "position: absolute; top: 0px; left: " + canvasLeft + "px; width: 800px; height: 600px; border: solid black 3px; background-color: #408fdb;");
    $('#whereforetheheckartthoucontainer').css({background: 'url(/old-media/gamesbackground2.png)', backgroundSize: '100vw 100vh'});

    getStarted();
  }
})

export function WhereforeTheHeckArtThou() {
  return (
    <Box id='whereforetheheckartthoucontainer' style={{width: '100vw', height: '100vh'}}>
      <div id="content">
        <div id="canvas" />
      </div>
    </Box>
  );
}
