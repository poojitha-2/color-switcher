let buttons = document.querySelectorAll("#button");
let body = document.body;

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.tartget);
        if(e.target.className === 'orange'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'lightgreen'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'grey'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'white'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'purple'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'yellow'){
            body.style.backgroundColor = e.target.className;
        }
    })
})
