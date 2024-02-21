import {groups} from "./groups";

function createGroup(groups) {
    // Get the container element
    var container = document.getElementById("lineup");

    // Use map to create an array of HTML strings
    var Groups = groups.map(function (group) {
        return (
            ` <div>` +
            `     <div class="group-country border" style="background-image: url('${group.flagImage}')">` +
            `         <h1 data-text="${group.location}" >${group.location}</h1>` +
            `     </div>` +
            `     <div class="group-name border">` +
            `         <h2 data-text="${group.name}">${group.name}</h2>` +
            `     </div>` +
            `     <div class="group-picture border" style="background-image: url('${group.picture}')"></div>` +
            `     <div class="group-description border">` +
            `         ${group.description}` +
            `     </div>` +
            `     <div class="group-picture border" style="background-image: url('${group.locationImage}')"></div>` +
            ` </div>`
        )
    }).join("");

    // Insert the HTML string into the container
    container.innerHTML = Groups;
}

createGroup(groups)
