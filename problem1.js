let num = 11 ;
let cnt = 0 ;
let bag = "" ;
for(let i = 2 ; i <= num**(0.5) ; i++){
    if(num % i == 0){
        cnt ++ ; 
    }
}
if(cnt == 0){
    bag += "prime" ;
}else{
    bag += "Composite" ;
}
console.log(bag);
