        // Script executes after the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            const formSection = document.getElementById('section-b');
            const toggleButton = document.getElementById('toggle-form-btn');

            // Check the initial visibility from the computed style
            const isFormInitiallyVisible = window.getComputedStyle(formSection).display !== 'none';

            // Set the initial state of the form and button text based on the CSS
            formSection.style.display = isFormInitiallyVisible ? 'block' : 'none';
            toggleButton.textContent = isFormInitiallyVisible ? 'Hide Form' : 'Show Form';
            // Handles the form submission
            function handleFormSubmit(event) {
                event.preventDefault(); // Prevents the default form submission behavior
                //Form submission Logic which basically means this is what we want to happen here
                const newElementInput = document.getElementById('new-element');
                const newDescriptionInput = document.getElementById('new-description');
                const startDateInput = document.getElementById('task-start-date');
                const statusInput = document.getElementById('task-status');
                const budgetInput = document.getElementById('task-budget');

                // Validates that all fields are filled in
                if (!newElementInput.value.trim() || !newDescriptionInput.value.trim() || 
                !startDateInput.value || !statusInput.value || !budgetInput.value) {
                    alert('Please fill in all fields correctly.');
                    return;
                }

                // Ensures the budget is a positive number
                if (parseFloat(budgetInput.value) < 0) {
                    alert('Please enter a valid budget (positive number).');
                    return;
                }

                // Adds the new task to the list in Section A
                const list = document.getElementById('element-list');
                const listItem = document.createElement('li');
                listItem.classList.add("list-group-item");
                listItem.innerHTML = `<strong>${newElementInput.value.trim()}</strong>: ${newDescriptionInput.value.trim()}<br>
                                    Start Date: ${startDateInput.value}<br>
                                    Status: ${statusInput.options[statusInput.selectedIndex].text}<br>
                                    Budget: $${budgetInput.value}`;
                list.appendChild(listItem);

                // Clears the input fields after submission
                newElementInput.value = '';
                newDescriptionInput.value = '';
                startDateInput.value = '';
                statusInput.selectedIndex = 0;
                budgetInput.value = '';
            }

            // Toggles the form's visibility on double-click
            function toggleForm() {
                const formSection = document.getElementById('section-b');
                formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
                document.getElementById('toggle-form-btn').textContent = formSection.style.display === 'block' ? 'Hide Form' : 'Show Form';
            }

            // Attaches event listeners for form submission and form toggle
            document.getElementById('add-element-form').addEventListener('submit', handleFormSubmit);
            document.getElementById('toggle-form-btn').addEventListener('click', toggleForm);
        });