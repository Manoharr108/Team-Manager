document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch employees by category
    function addTabs (){
        fetch(`/employees`)
        .then(response => response.json())
        .then(data => {
            let tabContainer = document.getElementById("achievementTabs");
            // tabContainer.innerHTML = ''; // Clear previous content

            // Loop through the employees and display them
            let arr = [];
            for (let i=0; i<data.emp.length; i++ ){
               arr.push(data.emp[i].category)
            }
            console.log(arr)
            function removeDuplicates(arr) {
                return arr.filter((item,
                    index) => arr.indexOf(item) === index);
            }
            console.log(removeDuplicates(arr));
            let emparr = removeDuplicates(arr)
            console.log(emparr)
            // console.log(data.emp[0])

            for(let i =0; i<emparr.length; i++){
                let tab;
                if(i==0){
                    tab = `
                    <li class="nav-item">
                        <a class="nav-link active" id="${emparr[i]}-tab" data-toggle="tab" href="#${emparr[i]}" role="tab">${emparr[i].toUpperCase()}</a>
                    </li> `;
                    }
                    else{
                        tab = `
                        <li class="nav-item">
                            <a class="nav-link" id="${emparr[i]}" data-toggle="tab" href="#${emparr[i]}" role="tab">${emparr[i].toUpperCase()}</a>
                        </li>`;
                    }
                // tabContainer.innerHTML+=tab;
            }

            
        });
    }
    addTabs()
   async function fetchEmployees(category, elementId) {
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
                                    <p class="card-text">Employee Id : ${employee._id}</p>
                                    <p class="card-text">${employee.role}</p>
                                </div>
                            </div>
                        </div>
                        `;
                        employeeContainer.innerHTML += employeeCard;
                });
            });
    }

    // Load MVP employees by default when the page loads
    fetchEmployees('mvp', 'mvpEmployees');

    // Fetch employees when a tab is clicked
    document.getElementById('achievementTabs').addEventListener('click', function(event) {
        let tab = event.target;
        if (tab.id === 'mvp-tab') {
            fetchEmployees('mvp', 'mvpEmployees');
        } else if (tab.id === 'keepitup-tab') {
            fetchEmployees('keepitup', 'keepItUpEmployees');
        }
        else if(tab.id === "needtowork-tab"){
            fetchEmployees('needtowork', 'needtoworkEmployees');
        }
    });
});