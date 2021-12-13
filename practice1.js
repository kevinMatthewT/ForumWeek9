const x="A+";
const y="O+";

if (x==="A+"||x==="A-"||x==="AB-"||x==="AB+"||x==="B+"||x==="B-"||x==="O+"||x==="O-"){
    if(y==="A+"||y==="A-"||y==="AB-"||y==="AB+"||y==="B+"||y==="B-"||y==="O+"||y==="O-"){
        if (x==="A+"||x==="A-"||x==="AB-"||x==="AB+"){
            if (y==="A+"||y==="A-"||y==="AB-"||y==="AB+"){
                console.log("safe");
            } else {
                console.log("not safe");
            }
        } else if (x==="B+"||x==="B-"||x==="AB-"||x==="AB+"){
            if (y==="B+"||y==="B-"||y==="AB-"||y==="AB+"){
                console.log("safe");
            } else{
                console.log("not safe");
            }
        }else {
            console.log("safe");
        } 
    } else{
        console.log("Reciever invalid bloodtype");
    }
}else{
    console.log("Donor invalid bloodtype");
}
