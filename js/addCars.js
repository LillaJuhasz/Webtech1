$("#addCars").on("submit", function (event) {
    event.preventDefault();

    $.post("/addCar", {
        "name": $("#carName").val(),
        "consumption": $("#carConsumption").val(),
        "color": $("#carColor").val(),
        "manufacturer": $("#carManufacturer").val(),
        "year": $("#carYear").val(),
        "available": $("#carAvailable").val(),
        "horsepower": $("#carHorsepower").val()
    }, function () {
        alert("Succesfully added a car!");
    }).fail(function () {
        alert("Failed to add a car!");
    });
});

$.get("/manufacturerNames", function (names) {
    names.forEach(function (name) {
        $("#carManufacturer").append('<option value="' +  name + '">' + name + '</option>');
    });
});