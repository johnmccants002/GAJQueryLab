
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function getItems() {

    var arrayOfValues = Object.values(localStorage);
    let lowestToHighest = arrayOfValues.sort((a, b) => a - b);
    lowestToHighest.forEach(function(element) {
        const skillText = getKeyByValue(localStorage, element);
        if(!skillText.length) return;
        let newRowElement = `
                <tr>
                    <td><button class = "xbutton">X</button></td>
                    <td class= "td-text">${skillText}</td>
                </tr>
        `;
        $('#skills tbody').append(newRowElement);
    })

 


}

$(document).ready(function() {
    console.log("in ready function");
$('tbody').empty();
getItems();
});



let trCount = $("#skills tbody").length;

console.log(trCount);

$("#skills").on('click','button', function () {
    let text = $(this).closest("tr") 
    .find(".td-text")     
    .text();
    console.log(text);
    $(this).closest('tr').remove();
    localStorage.removeItem(`${text}`);
});

$('#addSkill').on('click', function (){
    console.log(`${$("#skill-text").val}`);
    const skillText = $("#skill-text").val();
    if(!skillText.length) return;
    let newRowElement = `
            <tr>
                <td class = "td-button"><button class = "xbutton">X</button></td>
                <td class= "td-text">${skillText}</td>
            </tr>
    `;
    $('#skills tbody').append(newRowElement);
    $('#skill-text').val('');

    localStorage.setItem(skillText, localStorage.length);
    // // if there are no more home to add, then disable the button.
    if(!skillText.length) $('#addSkill').attr('disabled', true);
});



$("#clearskills").on('click', function(){
    localStorage.clear();
    $('tbody').empty();
    
});





