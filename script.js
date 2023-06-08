const { clear } = require("console");


function tampil() {   

    const body = document.body;    
    const namaDomain = document.getElementById('namaDomain').value;
    const ekstensiDomain = document.getElementById('ekstensiDomain').value;
    const jumlah = document.getElementById('jumlah').value;

    

    for (let i = 1; i <= jumlah; i++) {
        const hasil = document.createElement('p');
        hasil.innerHTML = `https://${namaDomain}.${ekstensiDomain}/${i}`;    
        body.append(hasil)
    }    
}

