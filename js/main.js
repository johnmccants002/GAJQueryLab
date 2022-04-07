$(document).ready(function() {
    console.log("in ready function");
$('tbody').empty();
});

let trCount = $("#skills tbody").length;

console.log(trCount);

$("#skills").on('click','button', function () {
    console.log("X button clicked");
    $(this).closest('tr').remove();
});

$('#addSkill').on('click', function (){
    console.log(`${$("#skill-text").val}`);
    const skillText = $("#skill-text").val();
    if(!skillText.length) return;
    let newRowElement = `
            <tr>
                <td><button class = "xbutton">X</button></td>
                <td class= "td-text">${skillText}</td>
            </tr>
    `;
    $('#skills tbody').append(newRowElement);
    $('#skill-text').val('');
    // // if there are no more home to add, then disable the button.
    if(!skillText.length) $('#addSkill').attr('disabled', true);
});

$("#previous-skills").on('click', function(){
    console.log("In previous skills button click")
    let newRowElement = `
    <tr>
    <td><button class = "xbutton">X</button></td>
    <td class= "td-text">Cascading Style Sheets (CSS)</td>
  </tr>
  <tr>
      <td><button class = "xbutton">X</button></td>
      <td class= "td-text">Hypertext Markup Language (HTML)</td>
    </tr>
    `;
    $('#skills tbody').append(newRowElement);

    $(this).hide();
});



