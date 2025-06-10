let button = document.getElementById("btn");
button.addEventListener("click", () => {
    let height = parseInt(document
        .querySelector("#height").value);
    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#output");

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Provide a valid height";
    }

    else if (weight === "" || isNaN(weight)){
        result.innerHTML = "Provide a valid Weight!";
    }

    else{
        let bmi = (weight / ((height * height)
        / 10000)).toFixed(2); 

    if (bmi < 18.6) result.innerHTML =
        `Under Weight : <span style="color:yellow; font-size:30px;">${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9)
        result.innerHTML =
            `Normal : <span style="color:green; font-size:30px;">${bmi}</span>`;

    else result.innerHTML =
        `Over Weight : <span style="color:red; font-size:30px;">${bmi}</span>`;
    }



})