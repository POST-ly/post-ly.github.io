function buildParams(params, url) {
    url = new URL(url)
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = parseVarsAndReplace(param.key)
        var value = parseVarsAndReplace(param.value)
        url.searchParams.append(key, value)
    }
    return url.toString()
}