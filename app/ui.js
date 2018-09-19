import document from "document";

export function ui() {
 this.statetext = document.getElementById("SpaceStateText"); 
 this.background = document.getElementById("background");

}

ui.prototype.updateUI = function(state,spacestate) {
  if (state === "loaded") {
    this.statetext.style.display = "inline";
    this.statetext.text = spacestate;
    
  }
  else {
    this.statetext.style.display = "none";
    

    if (state === "loading") {
      this.statetext.text = "Loading state ...";
    }
    else if (state === "disconnected") {
      this.statetext.text = "Please check connection to phone and Fitbit App"
    }
    else if (state === "error") {
      this.statetext.text = "Something terrible happened.";
    }
  }
}


