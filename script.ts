let myName:any = document.getElementById('Name');
let Desination:any = document.getElementById('Desination');
let Phone:any= document.getElementById('Phone');
let email:any= document.getElementById('email');
let Address:any= document.getElementById('Address');
let Pass:any= document.getElementById('Pass');
let Degree:any= document.getElementById('Degree');
let Uni:any= document.getElementById('Uni');
let Pass2:any= document.getElementById('Pass2');
let Degree2:any= document.getElementById('Degree2');
let Uni2:any= document.getElementById('Uni2');
let skill1:any= document.getElementById('skill1');
let skill2:any= document.getElementById('skill2');
let skill3:any= document.getElementById('skill3');
let lang1:any= document.getElementById('lang1');
let lang2:any= document.getElementById('lang2');
let styear:any= document.getElementById('styear');
let endyear:any= document.getElementById('endyear');
let Company:any= document.getElementById('Company');
let Complocation:any= document.getElementById('Complocation');
let jobtitle:any= document.getElementById('jobtitle');
let achv1:any= document.getElementById('achv1');
let achv2:any= document.getElementById('achv2');
let achv3:any= document.getElementById('achv3');
let pic:any = document.getElementById('pic')

let submitbtn = document.getElementById('submitbtn');
let form = document.getElementById('form');
form?.addEventListener('submit',(e)=>{
e.preventDefault()
localStorage.setItem('Name', myName.value)
localStorage.setItem('Desination', Desination.value)
localStorage.setItem('Phone', Phone.value)
localStorage.setItem('email', email.value)
localStorage.setItem('Address', Address.value)
localStorage.setItem('Pass', Pass.value)
localStorage.setItem('Degree', Degree.value)
localStorage.setItem('Uni', Uni.value)
localStorage.setItem('Pass2', Pass2.value)
localStorage.setItem('Degree2', Degree2.value)
localStorage.setItem('Uni2', Uni2.value)
localStorage.setItem('skill1', skill1.value)
localStorage.setItem('skill2', skill2.value)
localStorage.setItem('skill3', skill3.value)
localStorage.setItem('lang1', lang1.value)
localStorage.setItem('lang2', lang2.value)
localStorage.setItem('styear', styear.value)
localStorage.setItem('endyear', endyear.value)
localStorage.setItem('Company', Company.value)
localStorage.setItem('Complocation', Complocation.value)
localStorage.setItem('jobtitle', jobtitle.value)
localStorage.setItem('achv1', achv1.value)
localStorage.setItem('achv2', achv2.value)
localStorage.setItem('achv3', achv3.value)

if(pic.files && pic.files[0]){
 let reader = new FileReader()
 reader.addEventListener("load",()=>{
  let textimg:any = reader.result
  localStorage.setItem('Profile_pic',textimg)

 })
 reader.readAsDataURL(pic.files[0])
 
}

  window.location.href ="./resume/resume.html";


});