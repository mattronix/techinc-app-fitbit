/*
 * Entry point for the watch app
 */
import * as messaging from "messaging";
import { ui } from "./ui.js";

let UI = new ui();


UI.updateUI("disconnected");

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  UI.updateUI("loading");
  messaging.peerSocket.send("Hi!");
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  UI.updateUI("loaded", evt.data);
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
  console.log(err)
  // Handle any errors
  UI.updateUI("error");
}