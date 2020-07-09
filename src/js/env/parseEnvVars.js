function Regex (left, right, matchEmpty) {
    matchEmpty = matchEmpty === false ? false : true
    var _ = matchEmpty ? '*' : '+'
    var l = left //esc(left)
    var r = right //esc(right)
    var start = '(?:' + l + ')'
    var middle = '(.' + _ + '?)'
    var end = r
    return new RegExp(start + middle + end, 'g')
    // return new RegExp(`(?:${l})(.${_}?)${r}`, 'g')
}

function parseVarsAndReplace(str) {
    // {{url}}/api/local/{{endpoint}}
    var currVars
    var parsedStr
    
    // get current Env
    // search in currnet env
    if(currentEnv && currentEnv.vars) {
        currVars = currentEnv.vars
        parsedStr = findAndReplace(str, currVars)
    } else {
        parsedStr = str
    }

    // search in global
    if(Envs) {
        // get global Env by "__globalEnv"
        var globalEnv = Envs.find((v => v.EnvId == "__globalEnv"))
        if(globalEnv) {
            currVars = globalEnv.vars
            parsedStr = findAndReplace(parsedStr, currVars)
        }
    }
    return parsedStr
}

function findAndReplace(str, currVars) {
    var parsedStr = str.replace(Regex(envVarInterpolationStart, envVarInterpolationEnd), (_, contents) => {
        for (var index = 0; index < currVars.length; index++) {
            var _var = currVars[index];
            if(_var.name == contents) {
                return _var.value
            }
        }
        return envVarInterpolationStart + contents + envVarInterpolationEnd
    })
    return parsedStr
}