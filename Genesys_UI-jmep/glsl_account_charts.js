document.getElementById("accountGroup").addEventListener("click", function() {
    document.getElementById("dialogOverlay").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("dialogOverlay").style.display = "none";
});






// Define a Dialog class
class Dialog {
    constructor(id) {
        this.element = document.getElementById(id);
    }
    
    toggle() {
        if (this.element.open) {
            this.element.close();
        } else {
            this.element.showModal();
        }
    }
}

// Create dialog instances
const dialogs = [
    new Dialog('myDialog_01'),
    new Dialog('myDialog_02'),
    new Dialog('myDialog_03'),
    new Dialog('myDialog_04')
];

// Add event listeners to open or close the dialogs when their respective buttons are clicked
document.getElementById('generalAccount').addEventListener('click', () => dialogs[0].toggle());
document.getElementById('subsidiary01').addEventListener('click', () => dialogs[1].toggle());
document.getElementById('subsidiary02').addEventListener('click', () => dialogs[2].toggle());
document.getElementById('subsidiary03').addEventListener('click', () => dialogs[3].toggle());

// Add event listener to close all dialogs when Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        dialogs.forEach(dialog => {
            if (dialog.element.open) {
                dialog.element.close();
            }
        });
    }
});

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


document.getElementById('topCloseBtn01').addEventListener('click', function() {
    topDialog.close();
});
document.getElementById('topCloseBtn02').addEventListener('click', function() {
    topDialog1.close();
});
document.getElementById('topCloseBtn03').addEventListener('click', function(){
    topDialog2.close();
});
document.getElementById('topCloseBtn04').addEventListener('click', function(){
    topDialog3.close();
});
