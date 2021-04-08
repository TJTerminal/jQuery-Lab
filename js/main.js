$('button').on('click', function () {
    // When button is clicked, text should appear on console
    console.log('it worked!');
    // Step 1: Get the input from the user and store it in a variable
    let element = $('input').val();
    // Step 2: Make a div element and add the array content to the div
    // add class to newly created element to select for later to delete
    const $div = $('<div>').text(element).addClass('deleteElement');
    // Step 3: Append the div to the div #mySkills
    $('#mySkills').append($div);
    // Step 4: Clear the input content
    $('input').val();
    // Step 5: delete when clicked and make a button element like div element from step 2
    const $button = $('<button>').text('X').addClass('X')
    // Step 6: add it to newly created div element like step 3
    $div.append($button)
    // Step 7: when clicked, remove the newly created element from the list
    $button.on('click', function() {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    })
})