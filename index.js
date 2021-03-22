const prompt=require('prompt-sync')({sigint:true});
const userName=prompt("Enter the id frequency:-----");
const value=userName.split('');
var min=182888377377373;
var max=0;
const a=[];
value.forEach(element => {
   a.push(Number(element));
});
a.sort();
 function x(){
    var b=[0,0,0,0,0,0,0,0,0,0];
 for(var i=0;i<a.length;i++){
  b[a[i]]++;
 }
 for(var i=0;i<b.length;i++){
    max=Math.max(max,b[i]);
}
for(var i=0;i<b.length;i++){
    if(b[i]!=0)
    min=Math.min(min,b[i]);
}
console.log("max value is   "+max+"  min value is  "+min);
var count=0;
for(var i=0;i<a.length;i++){
    count=0;
    for(var j=0;j<a.length;j++){
        if(a[j]===a[i]){
            count++;
        }
        if(count===max){
           var d=a[i]
        }
        if(count===min){
            var m=a[i]
        }
        
    }
  
}
console.log("max Id frequency",+d,"min id frequncy",+m);
 };
 x();



