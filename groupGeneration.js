function createGroup(groups) {
    // Get the container element
    var container = document.getElementById("lineup");

    // Use map to create an array of HTML strings
    var Groups = groups.map(function(group) {
        return group.name + group.location + group.description + group.picture + group.locationImage;
    });

    // Insert the HTML string into the container
    container.innerHTML = Groups;
}

const groups = [
    {
        name: "Dias pampas",
        location: "Pérou",
        description: "Tata youy",
        picture: "bla",
        locationImage: "balbla",
    },
    {
        name: "Dias pampas",
        location: "Pérou",
        description: "Tata youy",
        picture: "bla",
        locationImage: "balbla",
    }
]

createGroup(groups)
