function DeleteHere(item) {
  if (confirm("Are you want to remove?")) {
    fetch(`/delete/${item.value}`, { method: "DELETE" })
      .then(() => {
        console.log("successfully deleted!!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  location.reload();
}
function setvalue(item){
    // console.log(item.value)
    const modal = new bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
 
    document.getElementById("editModalForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("editName").value;
        const photo = document.getElementById("editPhoto").value;
        const role = document.getElementById("editRole").value;
        
        // Update employee via API call or other means
        fetch(`/edit/${item.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, photo, role }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Employee updated:");
            // Optionally, refresh the employee list or update UI
            location.reload(); // if you want to reload the page
        })
        .catch((error) => console.log("Error updating employee:", error.message));
    });
    
}