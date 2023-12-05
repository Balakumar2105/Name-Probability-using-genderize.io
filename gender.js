class Gender{
    
    async getName(name){

        const response = await fetch(`https://api.genderize.io?name=${name}`);

        const data = await response.json();

        return data

    }


}
