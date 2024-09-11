document.addEventListener('DOMContentLoaded', function() {
    // Function to dynamically add tabs and content sections
   
    const categoryDropdown = document.getElementById('category');

    // Function to update the dropdown based on active tab
    function updateCategoryDropdown() {
        const activeTab = document.querySelector('.nav-link.active');
        
        if (activeTab) {
            const activeTabId = activeTab.getAttribute('id').replace('-tab', ''); // Remove '-tab' from tab id
            categoryDropdown.value = activeTabId; // Set dropdown value based on tab
        }
    }

    // Add event listener to tabs to detect when they change
    document.getElementById('achievementTabs').addEventListener('click', function(event) {
        let tab = event.target;
        if (tab.classList.contains('nav-link')) {
            setTimeout(updateCategoryDropdown, 100); // Delay to allow tab to change
        }
    });

    // Initially update dropdown based on the default active tab
    updateCategoryDropdown();

    

    function addTabsAndContent() {
        fetch(`/employees`) // Fetch the employee data from your API
            .then(response => response.json())
            .then(data => {
                let tabContainer = document.getElementById("achievementTabs");
                let tabContentContainer = document.getElementById("tabContent");

                tabContainer.innerHTML = ''; // Clear previous tabs
                tabContentContainer.innerHTML = ''; // Clear previous tab content

                // Extract unique categories from employee data
                let categories = [...new Set(data.emp.map(employee => employee.category))];
                // Create tabs and corresponding content for each category
                categories.forEach((category, index) => {
                    let tabId = `${category}-tab`;
                    let tabPaneId = `${category}-pane`;

                    // Create a new tab
                    let tab = `
                        <li class="nav-item">
                            <a class="nav-link ${index === 0 ? 'active' : ''}" id="${tabId}" data-toggle="tab" href="#${tabPaneId}" role="tab">
                                ${category.toUpperCase()}
                            </a>
                        </li>
                    `;
                    tabContainer.innerHTML += tab;
                    // Create corresponding tab content container
                    let tabContent = `
                        <div class="tab-pane fade ${index === 0 ? 'show active' : ''}" id="${tabPaneId}" role="tabpanel">
                            <div id="${category}Employees" class="row"></div>
                        </div>
                    `;
                    tabContentContainer.innerHTML += tabContent;

                    // Load employees for the first tab (active tab)
                    if (index === 0) {
                        fetchEmployees(category, `${category}Employees`);
                    }
                });
            });
    }
    

    // Function to fetch and display employees by category
    function fetchEmployees(category, elementId) {
        fetch(`/emp/${category}`)
        .then(response => response.json())
        .then(data => {
            let employeeContainer = document.getElementById(elementId);
            employeeContainer.innerHTML = ''; // Clear previous content

            // Loop through the employees and display them
            data.forEach(employee => {
                let employeeCard = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${employee.photo}" class="card-img-top" alt="${employee.name}">
                            <div class="card-body">
                                <h5 class="card-title">${employee.name}</h5>
                                <p class="card-text">Employee Id: ${employee._id}</p>
                                <p class="card-text"> ${employee.role}</p>
                            </div>

                            <!-- Buttons that appear on hover -->
                            <div class="card-buttons">
                                <button class="btn btn-warning edit-btn" value="${employee._id}"  data-bs-toggle="modal" data-bs-target="#editModal" onclick="setvalue(this)">Edit ✏️</button>
                                <button class="btn btn-danger delete-btn" value="${employee._id}" onclick="DeleteHere(this)" >Delete ❌</button>
                            </div>
                        </div>
                    </div>
                `;
                employeeContainer.innerHTML += employeeCard;
            });
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
        });
    }

    // Initialize tabs and content on page load
    addTabsAndContent();

    // Handle tab click event to load the corresponding employees dynamically
    document.getElementById('achievementTabs').addEventListener('click', function(event) {
        let tab = event.target;
        if (tab.tagName === 'A') {
            let category = tab.getAttribute('href').substring(1).replace('-pane', ''); // Extract category from tab's href
            fetchEmployees(category, `${category}Employees`);
        }
    });
});