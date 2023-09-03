let fah = document.getElementById('fah');
let kel = document.getElementById('kel');
let cel = document.getElementById('cel');
let nums = document.querySelectorAll('.num');
nums.forEach((num)=>{
    num.addEventListener('input',()=>{
        if(num){
            if(num.id==='cel'){
                fah.value=(Number(num.value)*9/5)+32
                kel.value=Number(num.value)+273.15
            }else if(num.id==='kel'){
                cel.value=Number(num.value)-273.15
                fah.value=(Number(num.value)-273.15)*9/5+32
            }else if(num.id==='fah'){
               cel.value=(Number(num.value)-32)*5/9
               kel.value=(Number(num.value)-32)*5/9+273.15
            }
        }
    })
})