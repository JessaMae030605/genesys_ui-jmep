function handleCheckboxGroup(mainCheckboxId, childCheckboxIds) {
    var mainCheckbox = document.getElementById(mainCheckboxId);
    var childCheckboxes = document.querySelectorAll(childCheckboxIds);

    mainCheckbox.addEventListener('change', function() {
        childCheckboxes.forEach(function(checkbox) {
            checkbox.checked = mainCheckbox.checked;
        });
    });
}

handleCheckboxGroup('all_branches', '#branch_1, #branch_2, #chk_dropdown, #branch_3');
handleCheckboxGroup('branch_2', '#branch_2A, #branch_2B, #branch_2C');

handleCheckboxGroup('all_branches2', '#branch_21, #branch_22, #chk_dropdown2, #branch_23');
handleCheckboxGroup('branch_22', '#branch_22A, #branch_22B, #branch_22C');