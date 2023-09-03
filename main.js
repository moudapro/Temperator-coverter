let fah = document.getElementById('fah');
let kel = document.getElementById('kel');
let cel = document.getElementById('cel');
let nums = document.querySelectorAll('.num');
nums.forEach((num)=>{
    num.addEventListener('input',()=>{
        if(num){/*if num is true*/
            if(num.id==='cel'){/*if you enter the value in celius input*/
                fah.value=(Number(num.value)*9/5)+32
                kel.value=Number(num.value)+273.15
            }else if(num.id==='kel'){/*if you enter the value in kelvin input*/
                cel.value=Number(num.value)-273.15
                fah.value=(Number(num.value)-273.15)*9/5+32
            }else if(num.id==='fah'){/*/*if you enter the value in fahrenheit input*/
               cel.value=(Number(num.value)-32)*5/9
               kel.value=(Number(num.value)-32)*5/9+273.15
            }
        }
    })
})
