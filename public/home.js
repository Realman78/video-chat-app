const input = document.querySelector('input')
const joinButton = document.querySelector('#joinButton')


joinButton.addEventListener('click', (e)=>{
    e.preventDefault()
    location.href = '/' + input.value
})

function redirect() {
    fetch('/createroom', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        return res.json()
    }).then((data) => {
        location.href = '/' + data.key
    })
        .catch((e) => {
            console.log(e)
        })
}