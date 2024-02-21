import {groups} from "./groups";

function createGroup(groups) {
    var container = document.getElementById("lineup");

    var Groups = groups.map(function (group) {
        return (
            ``
        )
    }).join("");

    container.innerHTML = Groups;
}

createGroup(groups)
