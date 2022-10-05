const $ = sel => document.querySelector(sel)
document.addEventListener("DOMContentLoaded", () => {
    let dbResponse = 
    fetch("/api")
    .then(resp => resp.json())
    .then( json => {
        dbResponse = json?.now
        $("#response").append(dbResponse)
        $("#success_response").style.display = 'block'
        $("#error_response").style.display = 'none'
    }).catch( (e) => {
        console.log(e)
        $("#error_response").style.display = 'block'
        $("#success_response").style.display = 'none'
    })
    
})
