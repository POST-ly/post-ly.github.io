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

function parseVarsAndReplace(str, localVars) {
    // {{url}}/api/local/{{endpoint}}
    var currVars
    var parsedStr
    
    // get current Env
    // search in current env
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

/**
 * 
 * @param {*} str 
 * @param {*} varOpts local vars -> collection vars -> env vars -> global vars
 * varOpts: props => env, collectionVars, localVars
 */
function parseVarsAndReplaceCollection(str, varOpts) {
    // precedence:
    // local vars -> collection vars -> env vars -> global vars

    var env =  varOpts.env || currentEnv || undefined // variables from the supplied env or current env
    var collectionVars = varOpts.collectionVars || undefined // variables from the collection.
    var localVars = varOpts.localVars || undefined // variables from file or JSON file.

    var currVars
    var parsedStr = str

    // search in selected vars from a file or JSON file.
    if(localVars) {
        currVars = localVars
        parsedStr = findAndReplace(parsedStr, currVars)        
    }

    // search in collection
    if(collectionVars) {
        currVars = collectionVars
        parsedStr = findAndReplace(parsedStr, currVars)                
    }

    // search in current Env or selected Env
    if(env) {
        if(env.vars) {
            currVars = env.vars
            parsedStr = findAndReplace(parsedStr, currVars)                            
        }
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