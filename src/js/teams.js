var newTeamModal = `
<!-- <div class="modal"> -->
    <div class="modal-backdrop newTeamModalBackdrop"></div>
    <div class="modal-body">
        <h4>Create A New Team</h4>
        <p id="modalNewTeamError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
        <div>
            <input type="text" id="newTeamName" placeholder="Team name" />
        </div>
        <div style="margin: 4px 0;">
            <button onclick="return newTeam(event)" class="newTeamModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">Create Team</button>
        </div>
    </div>

<!-- </div> -->
`

function createTeam(event) {
    log("New Team Modal")
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("newTeamModal")
    //mo.classList.add("close")
    mo.innerHTML = newTeamModal

    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.newTeamModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
    })
}

var addToTeamModal = `
<!-- <div class="modal"> -->
    <div class="modal-backdrop addToTeamModalBackdrop"></div>
    <div class="modal-body">
        <h4>Add New Team Member(s)</h4>
        <p id="modalAddNewTeamError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
        <div>
            <input type="text" id="newTeamMemberName" placeholder="Type member name" />
        </div>
        <div style="margin: 4px 0;">
            <h3 class="resultAddTeamHead">Results:</h3>
            <ul>
                <li>
                    <div class="resultAddTeamItem">
                        <span style="">Chidume</span>
                        <span style="display: flex; align-items: center;">
                            Action: 
                            <a onclick="return showDropdown('.addTeamDropdown')" style="position: relative;">
                                <span>Normal Member</span>
                                <span class="icon-arrow-down"></span>
                                <div class="dropdown addTeamDropdown close">
                                    <ul>
                                        <li><a onclick="return ">Owner</a></li>
                                        <li><a onclick="return ">Delete</a></li>
                                    </ul>
                                </div>
                            </a>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="resultAddTeamItem">
                        <span style="">Nnamdi</span>
                        <span style="display: flex; align-items: center;">
                            Action: 
                            <a>
                                <span>Normal Member</span>
                                <span class="icon-arrow-down"></span>
                            </a>
                        </span>
                    </div>
                </li>

            </ul>
        </div>
    </div>

<!-- </div> -->
`

function addToTeam(event) {
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("addNewTeamModal")
    // mo.classList.add("close")
    mo.innerHTML = addToTeamModal

    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.addToTeamModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
    })
}

// This will fetch all the teams the user belongs to
function loadTeams() {
    var htmlStr = `
        <li><a onclick="return selectTeam('personal')">Personal</a></li>
    `
    axios.get(url + "teams/" + user.id).then((res) => {
        var _teams = res.data
        teams = _teams
        _teams.forEach(function(team) {
            htmlStr += `<li><a onclick="return selectTeam('${team.id}')">${team.name}</a></li>`
        });
        teamsList.innerHTML = htmlStr
    }).catch(e => {
        log(e)
    })
}


