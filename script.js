// Form submission handling
document.getElementById("report-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const disasterType = document.getElementById("disaster-type").value;
    const description = document.getElementById("description").value;

    // Simulate form submission response
    const responseDiv = document.getElementById("form-response");
    responseDiv.textContent = `Thank you, ${name}. Your report for a ${disasterType} at ${location} has been submitted. Description: ${description}`;
    
    // Clear form fields
    document.getElementById("report-form").reset();
});
