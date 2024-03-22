function handleCheckboxGroup(mainCheckboxId, childCheckboxIds) {
    var mainCheckbox = document.getElementById(mainCheckboxId);
    var childCheckboxes = document.querySelectorAll(childCheckboxIds);

    mainCheckbox.addEventListener('change', function() {
        childCheckboxes.forEach(function(checkbox) {
            checkbox.checked = mainCheckbox.checked;
        });
    });
}

handleCheckboxGroup('menu_g1', '#menu_g1_func1, #menu_g1_func2, #menu_g1_func3');
handleCheckboxGroup('menu_g2', '#menu_g2_func1, #menu_g2_func2, #menu_g2_func3');
handleCheckboxGroup('menu_g3', '#menu_g3_func1, #menu_g3_func2, #menu_g3_func3');


document.getElementById('changeBtn').addEventListener('click', function() {
    // Hide changeBtn, editBtn, and deleteBtn
    document.getElementById('changeBtn').classList.add('d-none');
    document.getElementById('editBtn').classList.add('d-none');
    document.getElementById('deleteBtn').classList.add('d-none');

    // Create Save and Cancel buttons
    var saveBtn = document.createElement('button');
    saveBtn.setAttribute('type', 'button');
    saveBtn.setAttribute('class', 'btn btn-primary mr-2'); // Modified class attribute
    saveBtn.innerHTML = 'Save';

    var cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'btn btn-danger light mr-2'); // Modified class attribute
    cancelBtn.innerHTML = 'Cancel';

    // Create a container for Save and Cancel buttons
    var btnGroup = document.createElement('div');
    btnGroup.setAttribute('class', 'd-flex justify-content-end mr-2'); // Modified class attribute
    btnGroup.appendChild(saveBtn);
    btnGroup.appendChild(cancelBtn);

    // Append the container to the card footer
    document.querySelector('.card-footer').appendChild(btnGroup);

    // Add event listener to Cancel button
    cancelBtn.addEventListener('click', function() {
        // Show changeBtn, editBtn, and deleteBtn
        document.getElementById('changeBtn').classList.remove('d-none');
        document.getElementById('editBtn').classList.remove('d-none');
        document.getElementById('deleteBtn').classList.remove('d-none');

        // Remove the container for Save and Cancel buttons
        btnGroup.remove();
    });
});




