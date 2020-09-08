const input = document.getElementById('todoInput');
// klik enter to pull value
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add").click();
    }
});

// make add list function that clikc html button
const addList = () => {
    // define element
    let task = document.getElementById('task');
    let completed = document.getElementById('completed');
    let sample = document.getElementById('sample');
    let clear = document.getElementById('clear');

    // create element
    let newP = document.createElement('p');
    let finish = document.createElement('button');
    let remove = document.createElement('button');

    finish.classList.add('finish');
    remove.classList.add('remove');
    finish.innerHTML = '&#10004;';
    remove.innerHTML = '&#10006;';


    // yoman
    if (input.value !== "") {
        newP.textContent = input.value;
        input.value = '';
        task.appendChild(newP);
        newP.appendChild(remove);
        newP.appendChild(finish);
    }

    // finish button
    finish.addEventListener('click', () => {
        newP.remove();
        completed.appendChild(newP);
        finish.remove();
    });

    // remove button
    remove.addEventListener('click', () => {
        newP.remove();
    });


    clear.addEventListener('click', () => {
        newP.remove();
    });
}