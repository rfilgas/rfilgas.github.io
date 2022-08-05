$(document).ready(() => {

    // Function to change button color yellow and modify text
    function turnYellow(button){
        button.innerHTML = 'Sent! Talk soon!';
        button.style.backgroundColor = 'var(--mustard)';
        button.style.borderColor = 'var(--bootstrap-gray800)';
        button.style.textColor = 'var(--bootstrap-gray800)';
    }

    // Form Validation and handling.
    $('#submit-button').on('click', (event) => {
        event.preventDefault();

        // error check word count
        if (document.getElementById('message-input').value.length > 1000){
            alert("That's a lot of words, please type a shorter message and resubmit.");
            return;
        }

        // check for proper email - hard to control this.
        if(!document.getElementById('emailControl').value.includes('@')){
            alert("Please enter a valid email address. Thank you!");
            console.log(document.getElementById('emailControl').value);
            return;
        }

        // The user either submitted nothing or is a smart alec. In any case we don't want only an email.
        if(document.getElementById('emailControl').value === document.getElementById('message-input').value){
            alert("Please fill in all fields.");
            return;
        }

        // Change submit button to reflect submission
        let button = document.getElementById('submit-button')
        buttonVals = button.valueOf();

        // Log message to console
        console.log(document.getElementById('emailControl').value);
        console.log(document.getElementById('message-input').value);

        // Clear form
        document.getElementById('message-input').value = '';
        document.getElementById('emailControl').value = '';
        document.getElementById('reasonControl').value ='Congrats!';
        mytime = setTimeout(turnYellow(button), 200);
        alert("This form is for demonstration purposes only and doesn't send emails. Please email rfilgas@pdx.edu.")
        return;
    });


    //  Change mouse over color of arrow tails, and insert my photo between arrow lines.
    $('.arrow-section').on('mouseenter', (event) => {
        event.target.style.backgroundColor = 'Black';
        event.target.style.color = 'Black';
        event.target.style.borderColor = 'Black';
        event.target.after(document.getElementById('me'))
        return
    });

    // Allow my face to be put back where it goes by mousing over the original location.
    $('.my-name').on('mouseenter', (event) => {
        event.target.before(document.getElementById('me'))
        return;
    });

    // Reset arrow colors when mouse leaves.
    $('.arrow-section').on('mouseleave', (event) => {
        event.target.style.backgroundColor = 'var(--mustard)';
        event.target.style.color = 'var(--mustard)';
        event.target.style.borderColor = 'var(--mustard)';
        return;
    });
});