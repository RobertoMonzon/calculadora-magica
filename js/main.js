let op;
let value1 



//result-C
let txtresult = document.getElementById("txtresult");
let btnclear = document.getElementById("btnclear");
let btnclose = document.getElementById("btnclose");
let btnopen = document.getElementById("btnopen");
let btnback = document.getElementById("btnback");
//9-8-7-/
let btnnine = document.getElementById("btnnine");
let btneight = document.getElementById("btneight");
let btnseven = document.getElementById("btnseven");
let btndivide = document.getElementById("btndivide");
//6-5-4-X
let btnsix = document.getElementById("btnsix");
let btnfive = document.getElementById("btnfive");
let btnfour = document.getElementById("btnfour");
let btnmultiply = document.getElementById("btnmultiply");
//3-2-1--
let btnthree = document.getElementById("btnthree");
let btntwo = document.getElementById("btntwo");
let btnone = document.getElementById("btnone");
let btnrest = document.getElementById("btnrest");
//.-=-+
let btnpoint = document.getElementById("btnpoint");
let btnequal = document.getElementById("btnequal");
let btnsum = document.getElementById("btnsum");
let btnzero = document.getElementById("btnzero");


btnclear.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value="";
});

btnnine.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="9";
});

btneight.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="8";
});

btnseven.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="7";
});

btndivide.addEventListener("click", function(event){
    event.preventDefault();
    op = "/"
    txtresult.value+="/";
});

btnsix.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="6";
});

btnfive.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="5";
});

btnfour.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="4";
});

btnmultiply.addEventListener("click", function(event){
    event.preventDefault();
    op = "x"
    txtresult.value+="*";
});


btnrest.addEventListener("click", function(event){
    event.preventDefault();
    op = "-"
    txtresult.value+="-";
});

btnthree.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="3";
});

btntwo.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="2";
});

btnone.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="1";
});

btnpoint.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+=".";
});

btnequal.addEventListener("click", function(event){
    event.preventDefault();

    txtresult.value=eval(txtresult.value);


});

btnsum.addEventListener("click", function(event){
    event.preventDefault();
    op = "+"
    txtresult.value+="+";
});

btnzero.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="0";
});

btnclose.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+=")";
});

btnopen.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value+="(";
});

btnback.addEventListener("click", function(event){
    event.preventDefault();
    txtresult.value = txtresult.value.substr(0, txtresult.value.length - 1);;
});

