//ini
const gender = new Gender();
const ui = new UI();



//getting inputs
const input = document.querySelector('#name');
const form = document.querySelector('#form-body');

//Adding event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const iValue = input.value;

    if(iValue === ""){
        alert("Please enter the name")
    } else {
        gender.getName(iValue)
        .then( data => {
            if(data.count === 0){
                alert('no')
            } else {
                ui.showOp(data);
            }
        })
    }

    // console.log(iValue)
})