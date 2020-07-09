
function signInModal(event) {
    var signInModalHtml = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop signInModalBackdrop"></div>
        <div class="modal-body">
            <h4>Sign In</h4>
            <div style="font-size: 14px; color: rgb(221,75,57);">
                <span>Don't have an account? <a style="display: inline; text-decoration: underline;" onclick="return signUpModal(event)">Sign up here</a></span>
            </div>
            <p id="signInModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
            <div style="margin: 9px 0;">
                <input type="text" id="signInUsername" placeholder="Username" />
            </div>
            <div style="margin: 9px 0;">
                <input type="password" id="signInPassword" placeholder="Password" />
            </div>
            <div style="margin: 9px 0;">
                <button onclick="return signIn(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">Sign In</button>
            </div>
        </div>

    <!-- </div> -->
    `
    closeActiveModals()
    var modalNode = document.createElement("div")
    modalNode.setAttribute("class", "modal")
    // modalNode.classList.add("close")
    modalNode.classList.add("saveModal")
    modalNode.innerHTML = signInModalHtml
    document.body.appendChild(modalNode)
    document.querySelector(".modal-backdrop.signInModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(modalNode)
    })
    modalsActive.push(modalNode)
}

function signUpModal() {
    var registerModal = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop signUpModalBackdrop"></div>
        <div class="modal-body">
            <h4>Sign Up</h4>
            <div style="font-size: 14px; color: rgb(221,75,57);">
                <span>Have an account? <a style="display: inline; text-decoration: underline;" onclick="return signInModal(event)">Sign in here</a></span>
            </div>
            <p id="sighnUpModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
            <div style="margin: 9px 0;">
                <input type="text" id="signUpUsername" placeholder="Username" />
            </div>
            <div style="margin: 9px 0;">
                <input type="email" id="signUpEmail" placeholder="Email" />
            </div>
            <div style="margin: 9px 0;">
                <input type="password" id="signUpPassword" placeholder="Password" />
            </div>
            <div style="margin: 9px 0;">
                <input type="password" id="signUpPassword2" placeholder="Retype Password" />
            </div>
            <div style="margin: 9px 0;">
                <button onclick="return signUp(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">Sign Up</button>
            </div>
        </div>

    <!-- </div> -->
    `
    closeActiveModals()
    var modalNode = document.createElement("div")
    modalNode.setAttribute("class", "modal")
    // modalNode.classList.add("close")
    modalNode.classList.add("saveModal")
    modalNode.innerHTML = registerModal
    document.body.appendChild(modalNode)
    document.querySelector(".modal-backdrop.signUpModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(modalNode)
    })
    modalsActive.push(modalNode)
}