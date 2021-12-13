var eMessage=[20,12,18,30,21];
var key=[1,9,3,9];

var List1= eMessage.length;
var ListSet=[];

let i=0;
while (i<=List1){
    LetterNum=eMessage[i];
    KeyNum=key[i];
    result=LetterNum-KeyNum;
    i=i+1;
    ListSet.push(result);
}

var LetterList=["empty","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var setLength= ListSet.length;

let j=1;
var word=[];

while (j<=setLength){
    Letter=LetterList[ListSet[j]];
    j=j+1;
    word.push(Letter);
}

console.log(word);
