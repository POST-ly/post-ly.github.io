function aboutModal() {
    var aboutModalHtmlStr = `
        <div class="modal-backdrop aboutModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">About POSTly</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <div>
                    <h1 style="display: flex;justify-content: center;" class="color-default">POSTly</h1>
                </div>
                <div style="padding: 10px;">
                    This app was built by <b class="color-default">Chidume Nnamdi</b>, a software developer from Nigeria.
                    \n

                    <p>
                        <h3>Social Media</h3>
                        You can reach me via:

                        <ul style="margin-left: 7px;">
                            <li style="padding: 3px 0;">Twitter: <a style="display:inline;" target="_blank" href="https://twitter.com/@ngarchangel">@ngArchangel</a></li>
                            <li style="padding: 3px 0;">Email: <a style="display:inline;" target="_blank" href="emailto:kurtwanger40@gmail.com">kurtwanger40@gmail.com</a></li>
                            <li style="padding: 3px 0;">Facebook: <a style="display:inline;" target="_blank" href="https://facebook.com/philip.david.5011">facebook.com/philip.david.5011</a></li>
                        </ul>
                    </p>
                    <div>
                        <h3>Feedback</h3>
                        <div>
                            Feel free to drop your issues, views and comments about this app on my email: <a style="display:inline;" target="_blank" href="emailto:kurtwanger40@gmail.com">kurtwanger40@gmail.com</a>\n
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = aboutModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".aboutModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
}