function historyItemClick(evt, tabId) {
    evt.stopPropagation()
    getHistory(tabId, (found, data) => {
        if (found) {
            createNewReqTab(evt, tabId, data)            
        }
    })
}

function toggleHistoryTabs(evt, what) {
    // remove active tab
    document.querySelector(`.tab.history.tab-active`)
        .classList.remove("tab-active")

    // activate tab clicked
    evt.target.parentNode
        .classList.add("tab-active")

    // remove active tab content
    document.querySelector(`.history.tab-content.tab-content-active`)
        .classList.remove("tab-content-active")

    // activate tab content clicked
    document.querySelector(`.history.${what}.tab-content`)
        .classList.add("tab-content-active")
}


function refreshHistoryTab() {
    document.querySelector(".history.historyUl")
        .innerHTML = "<div>Loading history data...</div>"
    
    // get all histories belonging to the current team
    getAllHistoryByTeamId(currentTeam.id, (done, res) => {
        //log("Loading history:",done, res)
        if(done) {
            var htmlStr = ""
            res.forEach(r => {
                var h = `
                    <li class="historyLi" onclick="return historyItemClick(event, '${r.tabId}')"><span class="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">${r.methodType}</span><span class="historyItemName">${r.name}</span></li>
                `
                htmlStr += h
            })
            document.querySelector(".history.historyUl")
                .innerHTML = htmlStr
        }
    })
}

function clearAllHistory() {
    if(confirm("You sure you want to clear all your history?")) {
        deleteAllHistory((done) => {
            if(done) {
                //log("done")
            } else {
                //log("Not done")
            }
            refreshHistoryTab()
        })
    }
}
