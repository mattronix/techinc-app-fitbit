/*
 * Entry point for the watch app
 */

import * as messaging from "messaging";
import document from "document";

 let statetext = document.getElementById("statetext"); 
 let background = document.getElementById("background");
// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  console.log(evt.data);
  statetext.text = evt.data;  
 
}
