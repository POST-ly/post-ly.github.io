function setPreRequest(axiosInst) {
    if(currentEditors[currentTab]["Pre-Request"]) {
        var preReqCode = currentEditors[currentTab]["Pre-Request"].getValue()

        axiosInst.interceptors.request.use(function (config) {
            new Function("postly", "config", preReqCode)(postly, config)
            return config;
        }, function (err) {
            return Promise.reject(err);
        });
    }
}