$('#addManufacturerForm').on('submit', function (event) {
    event.preventDefault();

    var name = $("#manufacturerName").val();
    var country = $("#manufacturerCountry").val();
    var founded = $("#manufacturerFounded").val();

    $.post("/addManufacturers", {
        name: name,
        country: country,
        founded: founded
    }, function () {
        alert("Succesfully added a manufacturer!");
    }).fail(function() {
        alert("Failed to add a manufacturer!");
    });
});