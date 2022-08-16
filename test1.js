let r = document.querySelector("button")
let t = document.querySelector("ul")
let z = document.querySelector("input")
let e = document.querySelector("li")
let u = document.getElementById("done")
let ua = document.getElementById("notdone")

let g;
let done = 0;
let notdone = 0;

ua.textContent = `- there is ${notdone} tasks not done`
u.textContent = `- there is ${done} tasks done`

r.onclick = function() {
    g = document.createElement("li")




    g.textContent = z.value

    g.classList.add("box")
    notdone += 1
    ua.textContent = `- there is ${notdone} tasks not done`
    u.textContent = `- there is ${done} tasks done`
    t.appendChild(g)
    g.addEventListener("click", function() {
        this.style.display = "none"
        done += 1
        notdone -= 1
        ua.textContent = `- there is ${notdone} tasks not done`
        u.textContent = `- there is ${done} tasks done`
        if (notdone == 0) {
            done = 0
        }
    })
    z.value = "type a task.."

}
