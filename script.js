 



var upperArr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerArr="abcdefghijklmnopqrstuvwxyz";
var numArr="0123456789";
var splArr="!@#$%^&*()";
var totalArr="";
let passWord="";
let strengthCount=0;
let charArray=[upperArr,lowerArr,numArr,splArr];
let radomArray=[];
let ran2;

function Rangevalue(){
    let ranVal=document.getElementById("rangeBar").value;
    document.getElementById("len").innerText = ranVal;
}

function PassWordGerator(){
   const val = document.querySelectorAll(".boxes");
   let Upper=val[0].checked;

   if(Upper==true){
    totalArr=upperArr.concat(totalArr);
    strengthCount++;
   }



   let Lower=val[1].checked;
   if(Lower==true){
    totalArr=lowerArr.concat(totalArr);
    strengthCount++;
   }


   let num=val[2].checked;
   if(num==true){
    totalArr=numArr.concat(totalArr);
    strengthCount++;
   }

   let spl=val[3].checked;
   if(spl==true){
    totalArr=splArr.concat(totalArr);
    strengthCount++;
   }

   var passwordLength =document.getElementById("rangeBar").value;
   console.log(strengthCount);

   if(strengthCount>0){

 if(strengthCount==4){
    for(let l=0;l<=3;l++){
    let c=ranNumGen();
    console.log(c)
      if(!radomArray.includes(c)){
    radomArray.push(c);
    }
    else{
       l-=1;
     }
     }
     for(let k=0;k<radomArray.length;k++){
        let temp2=radomArray[k];
        let temp=charArray[temp2];
     let ran3=Math.floor(Math.random()*temp.length);
     passWord+=temp[ran3];
   
}
passwordLength=passwordLength-4;
 }


   for(let i=0;i<passwordLength;i++){
     let ran=Math.floor(Math.random() *totalArr.length );
     passWord+=totalArr[ran];
     console.log("hello");
    }
  
    let moon=document.getElementById("passWord");
   moon.value=passWord;
   totalArr="";
   passWord="";
   StrengthFinder(strengthCount);
   strengthCount=0;
   radomArray=[];
  
}else{
    var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!§$%&/?#+-_@";
    var passwordLength =document.getElementById("rangeBar").value;
    for(let i=0;i<passwordLength;i++){
        let ran=Math.floor(Math.random() *chars.length );
        passWord+=chars[ran];
        console.log("hello");
       }
       let moon=document.getElementById("passWord");
       moon.value=passWord;
       totalArr="";
       passWord="";
       strengthCount=0;
       radomArray=[];
       StrengthFinder(4);
}
}
 

 function copyPassword() {
    var copyText = document.getElementById("passWord");
    copyText.select();
    document.execCommand("copy"); 
  };

 
function ranNumGen()
{
    ran2=Math.floor(Math.random()*4);
    return ran2;
}
 
function StrengthFinder(x){
    let roots=document.querySelectorAll(".root");
    let para=document.getElementById("med");
    for(let i=0;i<4;i++){
        roots[i].style.background="none";
        para.innerText="STRONG"
        };

    if(x==4){
        for(let i=0;i<4;i++){
        roots[i].style.background= "#A4FFAF";
        para.innerText="STRONG"
        }
    }
    if(x==3){
        for(let i=0;i<3;i++){
        roots[i].style.background= "#F8CD65";
        para.innerText="MEDIUM"
        }
    }
    if(x==2){
        para.innerText="WEAK"
        for(let i=0;i<2;i++){
        roots[i].style.background= "#FB7C58";
        }
    }
    if(x==1){
        para.innerText="TOO WEAK!"
        roots[0].style.background= "#F64A4A";
        }
    }


