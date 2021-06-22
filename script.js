/* var sayi1=20;
var sayi2=30;
var sayi3=40;

alert("toplamları: "+(sayi1+sayi2+sayi3));

var a="Javascript";
var b="Programlama";
var c="Dili"
alert(a+b+c);  

var a;

a=10;

var b=a*2+10;
alert("b nin değeri: " +b) 
var array=["java","Phyton","c++","c"];
array.push("Go");  /* 4. indes eklıyoruz push la da ekleyebılırız*/
/*
alert(array[0]);
alert(array[1]);
alert(array[2]);
alert(array[3]); 
/* 4. indes eklıyoruz*/
/*
array[4]="Php";
alert(array);  
alert(array.length);


for(var i=0; i<10; i++){
    console.log("helloo"); 
}
var i=0;
while(i<100){
    console.log("i değeri :"+i);
    i+=2;
}

var sayilar =[32,5,1,100,-1,90];
console.log("Array elemanları...");
/*
for(var i=0; i<sayilar.length;i++){
    console.log("Eleman: "+sayilar[i]);
}


sayilar.forEach(function(sayi){
    console.log("Eleman: " +sayi);   /*boylede aynı sonucu elde ediyoruz 
})


var a=5;
var b=6;

if(a==b){
    console.log("Esit");
}
else{
    console.log("Esit degil");
}
if(2==2){
    console.log("Esit");
}
if(2== "2"){
    console.log("YİNE esit")
}
if(2==="2"){
    console.log("esit mi")   /* busefer esit değil  
}
if(2==2 && "fırat"=="fırat"){
    console.log("Evet");
}


var islem=2;

switch(islem){
    case 1:
        console.log("İslem 1");
        break;
        case 2:
            console.log("İslem 2");
            break;
            case 3:
                console.log("İslem 3");
                break
                default:
                    console.log("Geçersiz işlem");

}
/*
if(islem==1){
    console.log("islem 1");
}
else if (islem==2){
    console.log("islem 2");
}
else if(islem==3){
    console.log("islem 3");
}
else{
    console.log("Gecersiz işlem...")
}

function hello(){
    console.log("Hello How re u today?");
}

hello();


function toplama(a,b,c){
   return a+b+c;
}
var toplam=toplama(3,4,5);
console.log("Toplamları: "+ toplam)


var employeer ={
    name: "Fırat Kocabacak",
    nickname:"Husbandleg",
    number:123456,
    language:["Java","C#","Kotlin"],
    adress:{
        city:"Ankara",
        Street:"1666.cad"

    },
    nameİnfo : function(){
        return  " Name: " + this.name+
        " Nickname: "+ this.nickname+
        " Number: "+this.number+
        " Language: "+ this.language+
        " Adress: "+this.adress.city +"/"+this.adress.Street;
        
    }
};
console.log(employeer.name);
console.log(employeer.nickname);
console.log(employeer.number);
console.log(employeer.language);
console.log(employeer.adress.city);
console.log(employeer.adress.Street);
console.log(employeer.nameİnfo());


var employer= new Object();

employer.name="Fırat Kocabacak";
employer.nickname="Husbandleg";
employer.nameInfo=function(){
    return "NameInfo: " + this.name + " nickname :  " + this.nickname
};

console.log(employer.name);
console.log(employer.nickname);
console.log(employer.nameInfo());


function employeer(name,surname,number){
   this.name=name;
   this.surname=surname;
   this.number=number;
   this.ShowInfo= function(){
       return "Name: "+ this.name + " \nSurname: " + this.surname +" \nNumber:" + this.number;
   }


}

var employeer1= new employeer("Fırat Kocabacak","Husbandleg",123456);
var employeer2=new employeer("Ferdi Ustundag","_HeadSh00T",12354);
console.log(employeer1.ShowInfo());
console.log(employeer2.ShowInfo());
*/

function push(){
    alert("Pushed the button...")
}
function click(element){
    element.innerHTML="Pushedd the button..";

}
function ChanceColor(){
    var element=document.getElementById("para1");
    element.style.color="red";
}
function mouseover(){
    var element=document.getElementById("para1");
    element.innerHTML="Mouse Over Effect";
}
function mouseout(){
    var element=document.getElementById("para1");
    element.innerHTML="Mouse Out Effect";
}
function result(){
    var form    =document.forms["form1"];
    var degree=form["name"].value;
    if(degree==""){
        alert("Name Area empty..");
        return false;

    }
    return true;

}







