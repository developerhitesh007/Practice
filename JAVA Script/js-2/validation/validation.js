
function chekpass(kaipn,spnid){
    var Pattern = /^([a-zA-Z0-9_\.\-])+$/;
    console.log(Pattern.test(kaipn.value));
}
function chekemail(kaipn,spnid){
    var Pattern = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9_\.\-])+\.)([a-zA-Z]){2,4}$/;
    console.log(Pattern.test(kaipn.value));
    if (Pattern.test(kaipn.value)){
        document.getElementById(spnid).innerHTML ="valid"
    }
    else{
        document.getElementById(spnid).innerHTML ="Invalid" 
    }
}
function chekreq(kaipn,spn) {
    console.log(kaipn);
    console.log(kaipn.value);
    if (kaipn.value == '') {
        document.getElementById(spn).innerText="This field is required !!!!"
        
    }
    else{
        document.getElementById(spn).innerText="" 
        
    }
}

