const adminCheckbox = document.getElementById('admin');
    const approvedReqCheckbox = document.getElementById('approved_req');
    const ibApprovalCheckbox = document.getElementById('ib_approval');

    adminCheckbox.addEventListener('change', function() {
        if (this.checked) {
            approvedReqCheckbox.disabled = true;
            ibApprovalCheckbox.disabled = true;
        } else {
            approvedReqCheckbox.disabled = false;
            ibApprovalCheckbox.disabled = false;
        }
    });

    approvedReqCheckbox.addEventListener('change', function() {
        if (this.checked) {
            adminCheckbox.disabled = true;
            ibApprovalCheckbox.disabled = true;
        } else {
            adminCheckbox.disabled = false;
            ibApprovalCheckbox.disabled = false;
        }
    });

    ibApprovalCheckbox.addEventListener('change', function() {
        if (this.checked) {
            adminCheckbox.disabled = true;
            approvedReqCheckbox.disabled = true;
        } else {
            adminCheckbox.disabled = false;
            approvedReqCheckbox.disabled = false;
        }
    });

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
        cancelBtn.setAttribute('class', 'btn btn-danger light'); // Modified class attribute
        cancelBtn.innerHTML = 'Cancel';
    
        // Create a container for Save and Cancel buttons
        var btnGroup = document.createElement('div');
        btnGroup.setAttribute('class', 'd-flex justify-content-end mr-2'); // Modified class attribute
        btnGroup.appendChild(saveBtn);
        btnGroup.appendChild(cancelBtn);
    
        // Append the container to the card footer
        document.querySelector('.card-footer').appendChild(btnGroup);
    
        // Add margin between buttons
        saveBtn.style.marginRight = '5px';
        cancelBtn.style.marginRight = '5px';
    
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
    
    