
//prime

 let num=13;
 function checkprime(num){
let check=true;
for(let i=2;i<num;i++)
{
if(num%i==0)
{
check =false;
break;
}
}
return check;
}
if(checkprime(num)==true)
{
console.log("It is Prime.");
}
else
{
console.log("It is not prime");

}
