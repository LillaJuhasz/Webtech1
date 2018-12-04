$(document).ready(function () {

    // List cars
    document.querySelector("#button3").onclick = function () {
        $(".contentbox").empty();

        $.getJSON("cars", function(data){
            var table = $("<table></table>");
            table.append("<tr><th>Manufacturer</th><th>Name</th><th>Consumption</th>" +
                "<th>Color</th><th>Year</th><th>Available</th><th>Horsepower</th></tr>");

            $.each(data, function(key, value){
                var row = $("<tr></tr>");
                var manufacturerObj = $("<td>" + value.manufacturer + "</td>");
                var nameObj = $("<td>" + value.name + "</td>");
                var consumptionObj = $("<td>" + value.consumption + "</td>");
                var colorObj = $("<td>" + value.color + "</td>");
                var yearObj = $("<td>" + value.year + "</td>");
                var availableObj = $("<td>" + value.available + "</td>");
                var horsepowerObj = $("<td>" + value.horsepower + "</td>");

                row.append(manufacturerObj);
                row.append(nameObj);
                row.append(consumptionObj);
                row.append(colorObj);
                row.append(yearObj);
                row.append(availableObj);
                row.append(horsepowerObj);
                table.append(row);
            });

            $(".contentbox").html(table);
        });
    };

    // List manufacturers
    document.querySelector("#button4").onclick = function () {
        $(".contentbox").empty();

        $.get("/manufacturers", function (manufacturers) {
                for (var i=0;i<manufacturers.length;i++){
                    $(".contentbox").append('<div class="manufacturer-list" manufacturer-data="' +
                        manufacturers[i].name + '">' + "<strong>" + manufacturers[i].name + "</strong><div>" +
                        "<small>Country: " + manufacturers[i].country + "<br> Founded on: " +
                        manufacturers[i].founded + "</small></div></div>");
                }
            }
        )};


    // List cars in manufacturers
    $(document).on("click", ".manufacturer-list", function () {
        var object = $(this);

        if (object.hasClass("on")) {
            object.find(".car-list").remove();
            object.removeClass("on");
        }
        else {
            document.cookie = "name=" + object.attr("manufacturer-data");
            object.addClass("on");
            $.get("/manufacturer", function (cars) {
                object.append('<div class="car-list"></div>');
                for (var car of cars) {
                    object.find(".car-list").append('<div class="car-list-item"> - <small>' + car.name + "</small></div>");
                }
            });
        }
    });


    // Add manufacturers
    document.querySelector("#button1").onclick = function () {
        $(".contentbox").empty();

        $.get("addManufacturers.html", function (data) {
            $(".contentbox").append(data);
        });
    };


    // Add cars
    document.querySelector("#button2").onclick = function () {
        $(".contentbox").empty();

        $.get("addCars.html", function (data) {
            $(".contentbox").append(data);
        });
    };


    // Close button location change in .brainfuck
    $(document).on("click", ".close-btn", function () {
        var object = $(this);

        if (object.hasClass("close")) {
            object.addClass("close-left");
            object.removeClass("close");
            return;
        }

        if (object.hasClass("close-left")) {
            object.addClass("close-down");
            object.removeClass("close-left");
            return;
        }

        if (object.hasClass("close-down")) {
            object.addClass("close-right");
            object.removeClass("close-down");
            return;
        }

        if (object.hasClass("close-right")) {
            object.addClass("close-top");
            object.removeClass("close-right");
            return;
        }

        if (object.hasClass("close-top")) {
            $(".brainfuck").remove();
            $("body").removeClass("eyecancer");
            $(".audio-on").remove();
        }
    });


    // "Kerni a nyeremeny!" button operation in .brainfuck
    $(document).on("click", "#okbutton", function () {
        $(".image-on").removeClass("hidden");
        $(".brainfuck").remove();
    });

    $(document).on("click", "#image", function () {
        $(".image-on").remove();
        $(".audio-on").remove();
        $("body").removeClass("eyecancer");
    });
});