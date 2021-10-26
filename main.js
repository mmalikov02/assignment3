//initialization
const startingBid = document.getElementById("startingbid");
const education = document.getElementById("education");
const networth = document.getElementById("Worth");
const caste = document.getElementById("caste");
const skills = document.getElementsByName("skills");  
const age = document.getElementsByName("type");
const reputation = document.getElementsByName("reputation");

const calculate = () => {
    let price = Number(startingBid.value); 

    if (price == 0) { 
        alert("Please, enter Starting bid!");
    }
    else {
        price = dropdown(education, price);
        price = dropdown(Worth, price);
        price = dropdown1(caste, price);
        price = getCheckboxValuesFilterReduce(skills, price);
        price = getRadioValue(age, price);
        price = getCheckboxValuesForLoop(reputation, price);

        let person = {
            bride_price: price,
        }
        document.getElementById("result").innerHTML = `$${person.bride_price}.\n`; //output
    }
}


const dropdown = (id, price) => {
    price = price * Number(id.value);
    return price;
}


const dropdown1 = (id, price) => {
    price = price + Number(id.value);
    return price;
}


const getCheckboxValuesFilterReduce = (checkbox, price) => {
    let list = Array.from(checkbox).filter(filteration) 
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (redu, item) => {
    return redu + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}


const getRadioValue = (node_list, price) => {
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const getCheckboxValuesForLoop = (checkbox, price) => {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked && Number.isInteger(Number(checkbox[i].value))) {
            price = price + Number(checkbox[i].value)
        }
        else if (checkbox[i].checked && !Number.isInteger(checkbox[i].value)) { 
            price = price * Number(checkbox[i].value)
        }
    }
    return price;
}

document.querySelector("button").addEventListener("click", calculate);