let oScript = document.createElement("script")
oScript.innerHTML = `
window.onload = function () {
    function callback(mrecords) {
        for (let i = 0; i < mrecords.length; i++) {
            let oModel = mrecords[i].target.children[16]
            if (oModel) {
                let width = "1200px"
                let height = "600px"
                let oPlayerCw = oModel.querySelector('#judge-myModal-core')
                oPlayerCw.style.width = width
                oPlayerCw.style.margin = 0
                oPlayerCw.style.padding = 0
                let oIframe = oModel.querySelector('iframe')
                oIframe.height = height
                let oPlayerCh = oModel.querySelector('.modal-content')
                oPlayerCh.style.height = "auto"
                let oHeader = oModel.querySelector(".modal-header")
                oHeader.onmousedown = (ele) => {
                    let OX = ele.offsetX
                    let OY = ele.offsetY
                    oModel.onmousemove = e => {
                        let DY = e.clientY - OY + 'px'
                        let DX = e.clientX - OX + 'px'
                        oModel.style.top = DY
                        oModel.style.left = DX
                    }
                }
                window.onmouseup = () => oModel.onmousemove = null
                oIframe.contentWindow.onmouseup = (e) => {
                    window.parent.document.querySelector(".modal.fade.in").onmousemove = null
                }
                oHeader.onmouseover = () => {
                    oHeader.style.cursor = "move"
                }
                oIframe.style.resize = "both"
                oIframe.style.width = width
                const myObserver = new ResizeObserver((Entries) => {
                    oPlayerCw.style.width = Entries[0].contentRect.width + "px"
                });
                myObserver.observe(oIframe);
                break
            }
        }
    }
    let observer = new MutationObserver(callback)
    observer.observe(document.body, { childList: true })
}`
document.body.append(oScript)