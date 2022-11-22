const clock = function(){
    const div = document.getElementById("clock")
    const p = document.getElementById("time")
    let date = new Date()
    let time = "AM"
    if (date.getHours()>12) {
        time = "PM"
        date.setHours(date.getHours()-12)
    }
    p.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${time}`
    div.appendChild(p)
    setInterval(clock,1000)
    
}

clock()