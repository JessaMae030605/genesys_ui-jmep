// Get the dialog element
const dialog = document.getElementById('myModal');

// Get the button that opens the dialog
const openDialogButton = document.getElementById('openDialog');

// Get the close button
const closeDialogButton = document.getElementById('closeDialog');

// Get the save and discard buttons
const saveButton = document.getElementById('saveButton');
const discardButton = document.getElementById('discardButton');

// When the user clicks the button, open the dialog
openDialogButton.addEventListener('click', () => {
  dialog.showModal();
});

// When the user clicks the close button, close the dialog
closeDialogButton.addEventListener('click', () => {
  dialog.close();
});

// When the user clicks the save button, save the data and close the dialog
saveButton.addEventListener('click', () => {
  // Add your save functionality here
  dialog.close();
});

// When the user clicks the discard button, discard the changes and close the dialog
discardButton.addEventListener('click', () => {
  // Add your discard functionality here
  dialog.close();
});