let myname = localStorage.getItem('Name')
window.addEventListener("load", ()=>{

let Desination = localStorage.getItem('Desination')
let Phone = localStorage.getItem('Phone')
let email = localStorage.getItem('email')
let Address = localStorage.getItem('Address')
let Pass = localStorage.getItem('Pass')
let Degree = localStorage.getItem('Degree')
let Uni = localStorage.getItem('Uni')
let Pass2 = localStorage.getItem('Pass2')
let Degree2 = localStorage.getItem('Degree2')
let Uni2 = localStorage.getItem('Uni2')
let skill1 = localStorage.getItem('skill1')
let skill2 = localStorage.getItem('skill2')
let skill3 = localStorage.getItem('skill3')
let lang1 = localStorage.getItem('lang1')
let lang2 = localStorage.getItem('lang2')
let styear = localStorage.getItem('styear')
let endyear = localStorage.getItem('endyear')
let Company = localStorage.getItem('Company')
let Complocation = localStorage.getItem('Complocation')
let jobtitle = localStorage.getItem('jobtitle')
let achv1 = localStorage.getItem('achv1')
let achv2 = localStorage.getItem('achv2')
let achv3 = localStorage.getItem('achv3')
let picture = localStorage.getItem('Profile_pic')

let resName:any= document.getElementById('resName')
resName.textContent =myname
let resDes:any = document.getElementById('resDes')
resDes.textContent =Desination
let resPhone:any = document.getElementById('resPhone')
resPhone.textContent =Phone
let resEmail:any = document.getElementById('resEmail')
resEmail.textContent =email

let resAddress:any = document.getElementById('resAddress')
resAddress.textContent =Address
let resPass:any = document.getElementById('resPass')
resPass.textContent =Pass
let resDegree:any = document.getElementById('resDegree')
resDegree.textContent =Degree2

let resUni:any = document.getElementById('resUni')
resUni.textContent =Uni
let resPass2:any = document.getElementById('resPass2')
resPass2.textContent =Pass2
let resDegree2:any = document.getElementById('resDegree2')
resDegree2.textContent =Degree2

let resUni2:any = document.getElementById('resUni2')
resUni2.textContent =Uni2

let reskill1:any = document.getElementById('reskill1')
reskill1.textContent =skill1
let reskill2:any = document.getElementById('reskill2')
reskill2.textContent =skill2

let reskill3:any = document.getElementById('reskill2')
reskill3.textContent =skill3
let resLang1:any = document.getElementById('resLang1')
resLang1.textContent =lang1

let resLang2:any = document.getElementById('resLang2')
resLang2.textContent =lang2
let resStartYear:any = document.getElementById('resStartYear')
resStartYear.textContent =styear

let resEndYear:any = document.getElementById('resEndYear')
resEndYear.textContent =endyear

let resCompany:any = document.getElementById('resCompany')
resCompany.textContent =Company
let resComplocation:any = document.getElementById('resComplocation')
resComplocation.textContent =Complocation

let resJobtitle:any = document.getElementById('resJobtitle')
resJobtitle.textContent =jobtitle

let resAchv1:any = document.getElementById('resAchv1')
resAchv1.textContent =achv1
let resAchv2:any = document.getElementById('resAchv2')
resAchv2.textContent =achv2

let resAchv3:any = document.getElementById('resAchv3')
resAchv3.textContent =achv3
let respic:any = document.getElementById('respic')
respic.textContent =picture

})





// // ............Ref-btn..............
// let ref_section = document.getElementById('ref');

// let btn = document.getElementById('btn');
// btn!.addEventListener('click',()=>{
//     ref_section!.classList.toggle('hide')
// })
// // ............Edu-btn..............
// let exp_section = document.getElementById('experiences');

// let btn5 = document.getElementById('btn5');
// btn5?.addEventListener('click',()=>{
//     exp_section!.classList.toggle('hide')
// })
let btn6 = document.getElementById('btn6');
btn6?.addEventListener('click',()=>{
    window.print()
})

// '''''''''''''''''edit button...............
let btn7 = document.getElementById('btn7');
btn7?.addEventListener('click',()=>{
    window.history.back()
})

// '''''''''''''''''sharelink button...............
let btn8 = document.getElementById('btn8');
let anc= document.getElementById('anc');
let userName;
if(myname){
    myname.toLowerCase().replace(/\s+/g,",")
}else{
    userName ='user'
}
let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myname}`
btn8?.addEventListener('click',()=>{
    anc?.setAttribute("href",uniqueUrl)
})
let btn9 = document.getElementById('btn9')
btn9?.addEventListener('click', ()=>{
    navigator.clipboard.writeText(uniqueUrl).then(()=>{
        alert('Copy done')
    })
})