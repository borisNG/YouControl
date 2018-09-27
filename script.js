var tabids = [] ;
chrome.tabs.query({url:"https://*.youtube.com/watch?v=*"}, function(tabs) {
    tabs.forEach(tab => {
        tabids.push(tab.id) ;
        createplayer(tab); 
   });
   if(tabs.length==0){
       addTextToUI("No Youtube Tab Found :(") ;
   }
} );
function addTextToUI(text){
    var div = document.createElement('div') ;
    div.innerHTML = text ;
    div.setAttribute("id","zuuul") ;
    document.getElementById("content").appendChild(div) ;
}
function createplayer(tab){
    addListenerToTab(tab) ;
    addTabToUI(tab) ;
}
function addListenerToTab(tab){
    chrome.tabs.onRemoved.addListener(function(tabId,removeInfo){
        if(tabids.includes(tabId))
        {
            removeTabToUI(tab);
        }    
    }) ;
    chrome.tabs.onUpdated.addListener(
        function(tabId, changeInfo, tab) {
          updateTabContent(tab,changeInfo);
        }
      );

}
function updateTabContent(tab,changeInfo){
    var b = document.getElementById("title-"+tab.id);
    b.text = tab.title.substr(0,40).concat("...") ;
}
function addTabToUI(tab){
    var div = document.createElement('div') ;
    div.innerHTML = getplayerUI(tab) ;
    div.setAttribute("id",tab.id) ;
    document.getElementById("content").appendChild(div) ;
}
function removeTabToUI(tab){
    document.getElementById(tab.id).remove() ;
}
function sendActionToPlayer(tabid){
    chrome.tabs.sendMessage(tabid,{}, {"option":"no option"}, function(tab){

    });
}

function getplayerUI(tab){
    var active = "" ;
    if(tab.audible)
        active = "active" ; 
    return `<div class="player" id="player-`+tab.id+`">
        <div id="control-panel" class="control-panel `+active+`">
            <div class="controls" id="control-`+tab.id+`">
                <div class="prev" id = "prev-`+tab.id+`"></div>
                <div id="play-`+tab.id+`" class="play" onclick="play(`+tab.id+`)"></div>
                <div class="next" id="next-`+tab.id+`"></div>
            </div>
            <div class="name center" ><b id="title-`+tab.id+`">`+tab.title.substr(0,40).concat("...")+`</b></div>
        </div>
    </div>` ;
   
    }
function play(tabid){

}


