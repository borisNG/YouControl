chrome.tabs.query({url:"https://*.youtube.com/watch?v=*"}, function(tabs) {
    
    tabs.forEach(tab => {
        chrome.tabs.executeScript(tab.id,{file:"contentscript.js"}), _=>{
            let e = chrome.runtime.lastError;
            if(e !== undefined){
              console.log(tabId, _, e);
            }
          };
    });
    
} );