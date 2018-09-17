/*
 * Entry point for the companion app
 */
export function TechincAPI(){

TechincAPI.prototype.state = function() {
let self = this;
return new Promise((resolve, reject) => {
    let url = "https://techinc.nl/space/spacestate.json"
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      let state = json["state"]["open"] ? "Open" : "Closed";
      
      resolve(state);
    }).catch(function (error) {
      reject(error);
    });
    
});

};


};

