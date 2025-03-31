document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert("Formulario enviado correctamente!");
        }

        form.classList.add('was-validated');
    });
});