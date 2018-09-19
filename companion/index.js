import { me } from "companion";
import * as messaging from "messaging";


import { TechincAPI } from "./techinc.js"




// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // Ready to send or receive messages
  SendSpaceState();
  setInterval(SendSpaceState, 10*1000);
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  console.log(JSON.stringify(evt.data));
}




function SendSpaceState() {
  let TechincApi = new TechincAPI();
  TechincApi.state().then(function(spacestate) {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
      messaging.peerSocket.send(spacestate);
    }
  }).catch(function (e) {
    console.log("error"); console.log(e)
  });
}