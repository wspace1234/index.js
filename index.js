let array =[11,13,15,17,18,19];
const min = 11;
const max = 19;
for(let i =min;i<max;i++){
    if(array.indexOf(i)<0){
     
     console.log("missing value is ",i,"and index of ",i,"is",(i-min));
   }

}