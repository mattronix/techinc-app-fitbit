import { me } from "companion";
import * as messaging from "messaging";


import { TechincAPI } from "./techinc.js"

let TechincApi = new TechincAPI();


setInterval(function(){
  TechincApi.state().then(function(state) {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
      // Limit results to the number of tiles available in firmware
      messaging.peerSocket.send(state);
    }
  }).catch(function (e) {
    console.log("error"); console.log(e)
});
}, 5000);
