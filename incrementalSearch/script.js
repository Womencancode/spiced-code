(function() {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Anguilla",
        "Antigua",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire (Netherlands Antilles)",
        "Bosnia Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Curacao (Netherlands Antilles)",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iraq",
        "Ireland (Republic of)",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kosrae Island",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Ponape",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Rota",
        "Russia",
        "Rwanda",
        "Saba (Netherlands Antilles)",
        "Saipan",
        "Samoa",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St. Barthelemy",
        "St. Croix",
        "St. Eustatius (Netherlands Antilles)",
        "St. John",
        "St. Kitts and Nevis",
        "St. Lucia",
        "St. Maarten (Netherlands Antilles)",
        "St. Thomas",
        "St. Vincent and the Grenadines",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Tinian",
        "Togo",
        "Tonga",
        "Tortola",
        "Trinidad and Tobago",
        "Truk",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos",
        "Tuvalu",
        "US Virgin Islands",
        "Uganda",
        "Ukraine",
        "Union Island",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Gorda",
        "Wallis and Futuna",
        "Yap",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];
    var textField = $("input");
    var results = $("#results");

    // hide the results div
    function hideResults() {
        results.css({
            visibility: "hidden"
        });
    }
    // get the input and show the results
    textField
        .on("input", function() {
            var val = textField.val();
            var matches = [];
            if (!val) {
                // hide and/ or empty the results display: none
                // results.empty()
                hideResults();
                return;
            }
            for (var i = 0; i < countries.length; i++) {
                if (
                    countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0
                ) {
                    matches.push(countries[i]);
                    if (matches.length == 4) {
                        break;
                    }
                }
            }
            if (textField.val() != "") {
                results.css({
                    visibility: "visible"
                });
                if (matches.length == 0) {
                    results.html('<div class="empty"> No results</div>');
                } else if (matches.length > 0) {
                    var html = "";
                    for (var y = 0; y < matches.length; y++) {
                        html += '<div class="result">' + matches[y] + "</div>";
                    }
                    results.html(html);
                }
            }
        })
        .on("focus", function() {
            textField.trigger("input");
        });
    // highlight results on mouseover
    $(document).on("mouseover", ".result", function(e) {
        $(".result").removeClass("highlight");
        $(e.target).addClass("highlight");
    });
    // handle no results
    $(document).on("mousedown", ".empty", function() {
        textField.val("");
        hideResults();
    });
    // add the result to the input area
    $(document).on("mousedown", ".result", function(e) {
        //set the vaule --> README e.target
        textField.val($(e.target).html());
        hideResults();
    });
    // key navigation
    $(document).on("keydown", function(e) {
        var highlighted = $(".highlight");
        if (e.keyCode == 40) {
            if (!$(".result").hasClass("highlight")) {
                $(".result")
                    .eq(0)
                    .addClass("highlight");
            } else if (
                !$(".result")
                    .eq(3)
                    .hasClass("highlight")
            ) {
                highlighted
                    .next()
                    .addClass("highlight")
                    .prev()
                    .removeClass("highlight");
            }
        }
        if (e.keyCode == 38) {
            if (!$(".result").hasClass("highlight")) {
                $(".result")
                    .eq(3)
                    .addClass("highlight");
            } else if (
                !$(".result")
                    .eq(0)
                    .hasClass("highlight")
            ) {
                highlighted
                    .prev()
                    .addClass("highlight")
                    .next()
                    .removeClass("highlight");
            }
        }
        if (e.keyCode == 13) {
            textField.val($(".result.highlight").html());
            hideResults();
        }
    });
    //blur on klick document
    textField.on("blur", function() {
        hideResults();
    });
})();
