// Functionality for the general ledger account button and dialog
const topButton = document.getElementById('generalLedgerAccountDescription');
const topButton1 = document.getElementById('subsidiaryLedger01');
const topButton2 = document.getElementById('subsidiaryLedger02');
const topButton3 = document.getElementById('subsidiaryLedger03');

const topDialog = document.getElementById('myTopDialog_01');
const topDialog1 = document.getElementById('myTopDialog_02');
const topDialog2 =document.getElementById('myTopDialog_03');
const topDialog3 =document.getElementById('myTopDialog_04');


topButton.addEventListener('click', function() {
    topDialog.showModal();
});
topButton1.addEventListener('click', function() {
    topDialog1.showModal();
});
topButton2.addEventListener('click', function() {
    topDialog2.showModal();
});
topButton3.addEventListener('click', function() {
    topDialog3.showModal();
});


document.getElementById('topCloseBtn').addEventListener('click', function() {
    topDialog.close();
});
document.getElementById('topCloseBtn01').addEventListener('click', function() {
    topDialog1.close();
});
document.getElementById('topCloseBtn02').addEventListener('click', function(){
    topDialog2.close();
});
document.getElementById('topCloseBtn03').addEventListener('click', function(){
    topDialog3.close();
});


// Functionality for the account identifier button and dialog overlay
const button = document.getElementById('accountIdentifier');
const dialogOverlay = document.getElementById('dialogOverlay');
const closeDialogButton = document.getElementById('closeBtn');

button.addEventListener('click', function() {
    dialogOverlay.style.display = 'block';
});

closeDialogButton.addEventListener('click', function() {
    dialogOverlay.style.display = 'none';
});


// Wrap your JavaScript code in a function to prevent global namespace pollution
(function() {

    // Array of dialog elements
    const dialogs = [
        document.getElementById("myDialog"),
        document.getElementById("myDialog_01"),
        document.getElementById("myDialog_02"),
        document.getElementById("myDialog_03"),
        document.getElementById("myDialog_04")
    ];

    // Array of button elements
    const buttons = [
        document.getElementById("accountGroup"),
        document.getElementById("generalAccount"),
        document.getElementById("subsidiary01"),
        document.getElementById("subsidiary02"),
        document.getElementById("subsidiary03")
    ];

    // Function to handle dialog opening for each button
    function openDialogAtIndex(index) {
        dialogs[index].showModal();
    }

    // Function to handle keydown event on document
    function handleKeyDown(event) {
        dialogs.forEach(function(dialog, index) {
            if (event.key === "Escape" && dialog.open) {
                dialog.close();
            } else if (event.key === "Enter" && dialog.open) {
                // Do something else when Enter key is pressed and dialog is open
            }
            // Add more conditions for other keys if needed
        });
    }

    // Add click event listeners to the buttons
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            openDialogAtIndex(index);
        });
    });

    // Add event listener for keydown event on document
    document.addEventListener('keydown', handleKeyDown);
})();



// Wrap your JavaScript code in a function to prevent global namespace pollution
(function() {

    // Array of dialog elements
    const dialogs = [
        document.getElementById("myDialog"),
        document.getElementById("myDialog_01"),
        document.getElementById("myDialog_02"),
        document.getElementById("myDialog_03"),
        document.getElementById("myDialog_04")
    ];

    // Array of button elements
    const buttons = [
        document.getElementById("accountGroup"),
        document.getElementById("generalAccount"),
        document.getElementById("subsidiary01"),
        document.getElementById("subsidiary02"),
        document.getElementById("subsidiary03")
    ];

    // Function to handle dialog opening for each button
    function openDialogAtIndex(index) {
        dialogs[index].showModal();
    }

    // Function to handle keydown event on document
    function handleKeyDown(event) {
        dialogs.forEach(function(dialog, index) {
            if (event.key === "Escape" && dialog.open) {
                dialog.close();
            } else if (event.key === "Enter" && dialog.open) {
                // Do something else when Enter key is pressed and dialog is open
            }
            // Add more conditions for other keys if needed
        });
    }

    // Add click event listeners to the buttons
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            openDialogAtIndex(index);
        });
    });

    // Add event listener for keydown event on document
    document.addEventListener('keydown', handleKeyDown);
})();
