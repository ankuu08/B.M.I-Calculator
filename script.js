let input1=document.querySelector(".in1");
let input2=document.querySelector(".in2");
let button1=document.querySelector(".bt1");
let button2=document.querySelector(".bt2");
let con=document.querySelector(".h6");
let re=document.querySelector(".mai");
let nav=document.querySelector(".n1");
console.log(input1);
console.log(input2);
console.log(button1);
console.log(button2);
console.log(re);
button1.addEventListener("click",()=>{
  let val1=input1.value;
  let val2=input2.value;
  let sq=val1*val1;
  let res=(val2/sq).toFixed(2);
  console.log(res);
  console.log(typeof res)
  if(isNaN(res)){
    alert("Invalid Input");
  }else{
    if(res<18.6){
      con.innerHTML=`Your B.M.I is ${res}.`;
      re.innerHTML="Remarks:You are UnderWeight.";
      re.style.opacity=1;
      re.style.color="red";
    }else if(res>=18.6&&res<=24.9){
      con.innerHTML=`Your B.M.I is ${res}.`;
      re.innerHTML="Remarks:You are Normal.";
      re.style.opacity=1;
      re.style.color="green";
    }else{
      con.innerHTML=`Your B.M.I is ${res}.`;
      re.innerHTML="Remarks:You are OverWeight.";
      re.style.opacity=1;
      re.style.color="red";
    }
  }
})
button2.addEventListener("click",()=>{
  input1.value="";
  input2.value="";
  con.innerHTML="Reult will be displayed here...";
  re.innerHTML="Remarks";
    re.style.opacity=0;
})