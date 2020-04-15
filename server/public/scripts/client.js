$(document).ready(readyNow);

function readyNow() {
    console.log( 'JQ loaded' );
    getTestData();
    $('#addPerson').on('click', addPerson);
} // end readyNow

function addPerson() {
$.ajax({
    type: 'POST',
    url: '/tester',
    data: {
        name : 'Dane'
    }
    }).then(function(response) {
        console.log(response);
        // DOM does not reflect array on server, go another GET
        getTestData();
    }).catch(function(error) {
        alert('ERROR IN POST');
    })
} // end addPerson

function getTestData() {
    console.log( 'in getTestData' );
    // AJAX GET call to /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then( function( response ) {
        console.log( 'back from server with:', response );
        // append to DOM
        appendToDom( response );
    }).catch( function( err ) {
        alert( 'problem! check the console' );
        console.log( err );
    }) // end ajax
} // end getTestData

function appendToDom( listOfPeople ) {
    $('#personList').empty();
    for (let person of listOfPeople) {
        // target UL and add each person to DOM
        $('#personList').append(`<li>${person}</li>`);
    } // end for  
} // end appendToDom