function setUpEnvIdb() {
    var EnvDb = new Dexie("EnvDb");
    EnvDb.version(2).stores({
        Env: 'EnvId'
    });
    postly["EnvDb"] = EnvDb
    createGlobalEnv()
}

function addEnvIdb(data, cb) {
    postly.EnvDb.Env.add(data).then(function() {
        return postly.EnvDb.Env.get(data.EnvId)
    }).then(function(returnedEnv) {
        return cb(true, returnedEnv)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function loadEnvsIdb(cb) {
    var Envs = []
    postly.EnvDb.Env.each(Env => { 
        Envs.push(Env)
    }).then(function () {
        cb(true, Envs)
    })
}


function deleteEnvIdb(EnvId, cb) {
    postly.EnvDb.Env.get(EnvId, function(Env) {
        if(Env) {
            postly.EnvDb.Env.delete(Env).then(function(res) {
                return cb(true, res)
            }).catch(function(err) {
                return cb(false, err)
            })
        }
        return cb(false, "Env not found.")
    })
}

function updateEnvIdb(data, cb) {
    postly.EnvDb.Env.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}