class UI {

    constructor(){
        this.profile = document.querySelector('#output') 
    }

    showOp(name){
        this.profile.innerHTML =`
        <div class="card text-white bg-dark mb-3 mt-3" style="max-width: 18rem; color:white">
            <div class="card-header"><h1>${name.name.toUpperCase()}</h1></div>
            <div class="card-body">
                <p>COUNT : ${name.count}</p>
                <p>GENDER : ${name.gender}</p>
                <p>PROBABILITY : ${name.count}</p>

        </div>
        `
    }

}