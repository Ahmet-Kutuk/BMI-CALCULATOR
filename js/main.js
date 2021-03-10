const calculeteBmi = () => {
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    let result = weight/Math.pow(height,2);
    document.querySelector("#result").innerText = result.toFixed(2);

    if(result<18.5){
        document.querySelector("#result-statu").innerText="Under weight";
        document.querySelector("#result-statu").style.color="#2196f3";
    }
    else if(result>=18.5 && result<25){
        document.querySelector("#result-statu").innerText="Normal";
        document.querySelector("#result-statu").style.color="#43a047";
    }
    else if(result>=25 && result<30){
        document.querySelector("#result-statu").innerText="Over weight";
        document.querySelector("#result-statu").style.color="#fb8c00";
    }
    else if(result>=30){
        document.querySelector("#result-statu").innerText="Obese";
        document.querySelector("#result-statu").style.color="#c62828";
         
    }
    //if weight or height is null
    else if(weight==0 || height==0.0){
        document.querySelector("#result").innerText="Please enter value";
    }
}
const reset = () => {
    document.querySelector("#weight").value=0;
    document.querySelector("#height").value=0;
    document.querySelector("#result").innerText="";
    document.querySelector("#result-statu").innerText="";
}

document.querySelector("#calculatebtn").addEventListener("click",calculeteBmi);
document.querySelector("#resetbtn").addEventListener("click",reset);