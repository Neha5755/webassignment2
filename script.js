
// script.js
$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const formData = $(this).serialize(); // Serialize form data
        $.post("submit.php", formData, function (data) {
            $("#formResult").html(data).fadeIn();
        });
    });
});
