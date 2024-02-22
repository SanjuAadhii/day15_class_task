
var arrForm=["FirstName","LastName","Email","PhoneNo","Password"];
var arrInput =["text","text","email","tel","password"];
var arrId=["firstName","lastName","email","phoneNo","password"];
var form =document.createElement("form")
for(let i=0;i<arrForm.length;i++){
     form.innerHTML +=`<label>${arrForm[i]}</label> <input type="${arrInput[i]}" id="${arrId[i]}" value=""><br>`;
     
}
form.innerHTML +="<button type='button' onclick='foo()'>Submit</button>"
document.body.append(form);

var valuesArray = [];

function foo(){
    var formValues = {};
   var layout = document.createElement("div");
   layout.className="style";
   layout.style.border="2px solid";
   layout.style.padding="5px";
   layout.margin="10px"
   layout.addEventListener("mouseover",function(){
    layout.style.border="2px solid red";
   })
   layout.addEventListener("mouseout",function(){
    layout.style.border="2px solid black";
   })

    for(let i=0;i<arrId.length;i++){
        var inputId = arrId[i];
        var inputValue = document.getElementById(inputId).value;
        console.log(inputId + ": " + inputValue);
        
        var displayElement = document.createElement("div");
        displayElement.innerHTML = `${arrForm[i]} : ${inputValue}`;
        layout.append(displayElement)
        document.body.append(layout);

        formValues[arrForm[i]] = inputValue;
    }

    valuesArray.push(formValues);
    console.log(valuesArray);
}

var bt = document.createElement("button")
bt.innerHTML="Click Me"
bt.margin="10px"
document.body.append(bt)
bt.addEventListener("click",function(){
    var val =parseInt(prompt("Rate you experience : "))
    var p = document.createElement("p");
    p.innerHTML=`Rate your Experience ${val}`;
    p.style.padding="5px";
    p.margin="10px"
    document.body.append(p)
})
