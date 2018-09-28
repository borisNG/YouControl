
function handleMessage(request, sender, sendResponse) {
    if(request.data=="PLAY_PAUSE")
        document.getElementsByClassName('ytp-play-button ytp-button')[0].click();
    if(request.data=="NEXT"){
        var btn = document.getElementsByClassName('ytp-next-button ytp-button')[0];
        btn.click();    
        
        sendResponse({text: btn.dataset.tooltipText});
    }
    if(request.data=="PREV"){
        var btn = document.getElementsByClassName('ytp-prev-button ytp-button')[0];
        btn.click();    
        
        sendResponse({text: btn.getAttribute("tooltip-text")});
    }
    if(request.data=="REPLAY"){
        window.location.reload();  
        
        sendResponse({response: "good"});
    }
        
}
chrome.runtime.onMessage.addListener(handleMessage);

