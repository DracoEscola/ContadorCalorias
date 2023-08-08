const nameInput = document.getElementById("nameInput");
const calInput = document.getElementById("calInput");
const submitBtn = document.getElementById("submitBtn");
const displayTxt = document.getElementById("totalTxt");
const listEl = document.getElementById("list");

var totalCal = 0;

function addItem() {
    if(nameInput.value && calInput.value>=0){
        li = document.createElement('li');
        nameSpan = document.createElement('span');
        calSpan = document.createElement('span');

        nameSpan.innerText = `${nameInput.value}: `;
        calSpan.innerText = `${calInput.value}cal`;
        
        totalCal+= parseFloat(calInput.value);

        li.appendChild(nameSpan);
        li.appendChild(calSpan);

        listEl.appendChild(li);

        nameInput.value = '';
        calInput.value = '';

        updateDisplay(false);
    }
}

function updateDisplay(readList) {
    if(typeof(readList)=="boolean"){
        switch(readList){
            case true:
                let listItems = listEl.childNodes;
                totalCal = 0
                listItems.forEach(element =>{
                    let calAmount = parseFloat(element.childNodes[1].innerText.replace('cal',''));
                    totalCal+= calAmount;
                })
            case false:
                displayTxt.innerText = `Total de calorias: ${totalCal}cal`;
        }
    }
    
};
