

//Calculates values in equations
function compute() {
    var num1 = document.getElementById("num1").value;
    var operator = document.getElementById("operator").value; 
    var num2 = document.getElementById("num2").value;
    var color = document.getElementById("color").value;
    var solution = num1 + operator + num2;
    
    
    var date = new Date();
        dateId = date.getTime();//newDiv and errorDiv use dateId their id, as a way of identifying divs in an array.
        var month = date.getMonth() + 1;
        var dateText = month + "/" + date.getDate() + "/" + date.getFullYear() + " ";
        var hour = date.getHours();
        var timeSuffix = "AM";//Adjusts for AM/PM
        if(hour >= 13){
            hour -= 12;
            timeSuffix = "PM";
        }
        var timeText = hour + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + timeSuffix;
        var dateTime = document.createElement("span");
        dateTime.setAttribute("class", "timestamp");
        dateTime.textContent = timeText + " " + dateText;
    
    //New error div
    if(num1.length == 0 || num2.length == 0){
        var errorDiv = document.createElement("div");
        errorDiv.setAttribute("id", dateId);
        errorDiv.setAttribute("class", "shadowed stuff-box red");
        errorDiv.appendChild(dateTime);
        var errorText = document.createTextNode("Error! Missing One Or More Operands!");
        errorDiv.appendChild(errorText);
        errorDiv.onclick = function() {removeDiv(errorDiv)};
        resultsDiv.insertBefore(errorDiv, document.getElementById(results[results.length - 1]));
        results.push(dateId);
        
    }
    //New math div
    else{
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", dateId);
        newDiv.appendChild(dateTime);
        newDiv.setAttribute("class", "shadowed stuff-box");
        newDiv.setAttribute("style", "background-color: " + color);
            var mathText = document.createTextNode(num1 + operator + num2 + "=" + eval(solution));
        newDiv.appendChild(mathText);
        newDiv.onclick = function() {removeDiv(newDiv)};
        resultsDiv.insertBefore(newDiv, document.getElementById(results[results.length - 1]));
        results.push(dateId);
        console.log(results);
    }

}
//Removes div from body
function removeDiv(currDiv){
    console.log("DEFEFEFFEF");
    var index = results.indexOf(parseInt(currDiv.id));
    console.log(currDiv.id);
    console.log(index);
    results.splice(index, 1);
    currDiv.remove();
}


document.title = "JS Calculatorinator";
var mainDiv = document.createElement("div"); //Houses math/number/color selectors
    mainDiv.setAttribute("id", "menu");
    mainDiv.setAttribute("class","stuff-box");
    mainDiv.setAttribute("class","shadowed black stuff-box");
    var newHeader = document.createElement("h1");
        newHeader.textContent = "JavaScript Calculator";
        mainDiv.appendChild(newHeader);
    var newText = document.createElement("h4");
        newText.textContent = "Create An Expression:";
        mainDiv.appendChild(newText);

        var number1 = document.createElement("input");
            number1.setAttribute("id", "num1");
            number1.setAttribute("type", "number");
            mainDiv.appendChild(number1);
        var operationSelect = document.createElement("select");
            operationSelect.setAttribute("id", "operator");
            var defaultOption = document.createElement("option");
                defaultOption.setAttribute("value", "none");
                defaultOption.textContent = " ";
                operationSelect.appendChild(defaultOption);
            var addOption = document.createElement("option");
                addOption.setAttribute("value", "+");
                addOption.textContent = "+";
                operationSelect.appendChild(addOption);
            var subOption = document.createElement("option");
                subOption.setAttribute("value", "-");
                subOption.textContent = "-";
                operationSelect.appendChild(subOption);
            var multOption = document.createElement("option");
                multOption.setAttribute("value", "*");
                multOption.textContent = "*";
                operationSelect.appendChild(multOption);
            var divOption = document.createElement("option");
                divOption.setAttribute("value", "/");
                divOption.textContent = "/";
                operationSelect.appendChild(divOption);
            var modOption = document.createElement("option");
                modOption.setAttribute("value", "%");
                modOption.textContent = "%";
                operationSelect.appendChild(modOption);
            var expOption = document.createElement("option");
                expOption.setAttribute("value", "**");
                expOption.textContent = "**";
                operationSelect.appendChild(expOption);
            mainDiv.appendChild(operationSelect);
        var number2 = document.createElement("input");
            number2.setAttribute("id", "num2");
            number2.setAttribute("type", "number");
            mainDiv.appendChild(number2);
        var computeButton = document.createElement("button");
            computeButton.setAttribute("type", "submit");
            computeButton.textContent = "Compute";
            computeButton.onclick = function() {compute()};
            mainDiv.appendChild(computeButton);
        var br = document.createElement("br");
            mainDiv.appendChild(br);
        var colorPicker = document.createElement("input");
            colorPicker.setAttribute("id", "color");
            colorPicker.setAttribute("type", "color");
            mainDiv.appendChild(colorPicker);
        var colorText = document.createTextNode("Color Of New Result <div>");
            mainDiv.appendChild(colorText);

document.body.appendChild(mainDiv);
var resultsDiv = document.createElement("div"); //Houses results generated after clicking 'Compute'
    var results = [0];//Keeps track of div order by id
document.body.appendChild(resultsDiv);





