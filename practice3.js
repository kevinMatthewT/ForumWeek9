var dp=[10,15,20];

const lengthList= dp.length;

var cost=[0,1,0,1,0,1,0,1,0,1];
var subtracted=[-1,-2,-1,-2,-1,-2,-1,-2,-1];

let i=0;
let total=0;
while (i<lengthList){
    newMultiple=dp[i]*cost[i];
    total=total+newMultiple;
    i+=1;
}

total=total+subtracted[lengthList];

console.log(total);
