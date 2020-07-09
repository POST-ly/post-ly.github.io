function setOptions(event, type) {
    var opts = postData[currentTab].options
    if(opts[type]) {
        opts[type] = false
    } else {
        opts[type] = true
    }
}