function run(){
    let x = prompt();
    let runRate = x/20;
    
    document.getElementById('secondTag').innerHTML = "Required run rate:" + " " + runRate + " runs per over";
    document.getElementById('secondTag').style.color = "red";
}
