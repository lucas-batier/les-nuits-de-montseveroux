const groups = [
    {
        name: "Khövsgöl Goo Maral",
        location: "Mongolie",
        description: "Fondé en 2008, \"Khövsgöl Goo Maral\" est un groupe de danse mongol renommé, dédié à préserver et à partager les riches traditions culturelles de la Mongolie à travers des performances artistiques exceptionnelles. Le groupe puise dans l'histoire ancienne de la Mongolie et intègre des éléments de la danse traditionnelle tels que le biyelgee et le khoomei dans leurs représentations, offrant ainsi une expérience unique qui reflète la diversité culturelle de la Mongolie.",
        picture: "images/groups/mongolia/mongolia-group-picture.jpg",
        locationImage: "images/groups/mongolia/mongolia-location.png",
        flagImage: "images/groups/mongolia/mongolia-flag.png",
    },
    {
        name: "Danzas del Perú",
        location: "Pérou",
        description: "Fondé en 2005, \"Danzas del Perú\", est un groupe de danse péruvien renommé, dédié à la préservation et à la promotion des traditions culturelles du Pérou à travers l'art de la danse. Avec une histoire riche, le groupe a émergé de la passion commune de ses membres pour la préservation du patrimoine culturel péruvien. Le groupe se distingue par ses performances dynamiques qui retracent l'histoire du Pérou, depuis les anciennes civilisations incas jusqu'à l'époque contemporaine. Leurs chorégraphies captivantes intègrent des éléments traditionnels tels que la marinera, la huayno, et la cueca, offrant une expérience artistique immersive. Au fil des années, Danzas del Perú a participé à de nombreux festivals nationaux et internationaux, recevant des éloges pour sa créativité et son engagement envers la préservation culturelle. En tant que groupe artistique, ils s'efforcent de transcender les frontières géographiques en partageant la richesse et la diversité de la culture péruvienne à travers des spectacles qui émerveillent et éduquent le public.",
        picture: "images/groups/peru/peru-group-picture.jpg",
        locationImage: "images/groups/peru/peru-location.png",
        flagImage: "images/groups/peru/peru-flag.png",
    },
    {
        name: "Gwiazdy Warszawy",
        location: "Pologne",
        description: "Fondé en 2012, \"Gwiazdy Warszawy\" est un groupe de danse polonais éminent, dédié à célébrer et à préserver l'héritage culturel riche de la Pologne à travers l'expression artistique de la danse. Le groupe se démarque par des performances passionnantes qui présentent l'évolution de la culture polonaise, de ses traditions folkloriques séculaires à ses influences contemporaines. Leurs chorégraphies captivantes intègrent des danses traditionnelles polonaises telles que le krakowiak et le oberek, offrant une expérience artistique immersive et éducative.",
        picture: "images/groups/poland/poland-group-picture.jpg",
        locationImage: "images/groups/poland/poland-location.png",
        flagImage: "images/groups/poland/poland-flag.png",
    },
    {
        name: "Tourbillons Azur",
        location: "Nice (France)",
        description: "Fondé en 2015, \"Tourbillons Azur\" est un groupe de danse basé à Nice, en France, dédié à l'exploration et à la célébration des arts traditionnels de la région niçoise. Le groupe se distingue par ses performances dynamiques qui capturent l'esprit festif et la riche histoire culturelle de Nice. Leurs chorégraphies intègrent des éléments de la danse folklorique niçoise, offrant une expérience artistique immersive qui célèbre l'identité unique de la région.",
        picture: "images/groups/nice/nice-group-picture.jpg",
        locationImage: "images/groups/nice/nice-location.png",
        flagImage: "images/groups/nice/nice-flag.png",
    }
]

const listOfDesktopFirstGroupPart = [
    (selectedGroupItemId) => `<div class="group-picture border" style="background-image: url('${groups[selectedGroupItemId].picture}')"></div>`,
    (selectedGroupItemId) => `<div class="group-name border">
        <h2 data-text="${groups[selectedGroupItemId].name}">${groups[selectedGroupItemId].name}</h2>
    </div>`,
    (selectedGroupItemId) => `<div class="group-picture border" style="background-image: url('${groups[selectedGroupItemId].locationImage}')"></div>`,
    (selectedGroupItemId) => `<div class="group-description border">${groups[selectedGroupItemId].description}</div>`,
]

const listOfDesktopOtherGroupPart = [
    (selectedGroupItemId) => `<div class="group-picture border" style="background-image: url('${groups[selectedGroupItemId].picture}')"></div>`,
    (selectedGroupItemId) => `<div class="group-description border">${groups[selectedGroupItemId].description}</div>`,
    (selectedGroupItemId) => `<div class="group-picture border" style="background-image: url('${groups[selectedGroupItemId].locationImage}')"></div>`,
    (selectedGroupItemId) => `<div class="group-name border">
        <h2 data-text="${groups[selectedGroupItemId].name}">${groups[selectedGroupItemId].name}</h2>
    </div>`,
]

function getCircularIndex(index, length) {
    return (index % length + length) % length;
}


function getGroupContent(index, selectedGroupItemId) {

    if (selectedGroupItemId === 0) {
        return listOfDesktopFirstGroupPart[getCircularIndex(index, groups.length)](selectedGroupItemId)
    }

    return listOfDesktopOtherGroupPart[getCircularIndex(index-selectedGroupItemId, groups.length)](selectedGroupItemId)
}

const isLgDown = window.matchMedia("(max-width: 1024px)");

isLgDown.addEventListener("change", function () {
    createGroup(groups, isLgDown);
})

function addClickEventOnGroupHeader(groups, isLgDown) {
    document.querySelectorAll('#desktop-view #desktop-lineup div .group-header').forEach(function (groupHeader) {
        groupHeader.addEventListener('click', function () {
            this.parentNode.parentNode.querySelectorAll('.selected').forEach(function (selected) {
                selected.classList.remove('selected');
            });

            this.parentNode.classList.add('selected');
            createGroup(groups, isLgDown);
        });
    });
}

function createGroup(groups, isLgDown) {

    if (isLgDown.matches) {
        const container = document.getElementById("mobile-lineup");
        container.innerHTML = groups.map(function (group) {
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
    } else {
        const container = document.getElementById("desktop-lineup");

        const selectedGroupItemId = parseInt($("#desktop-lineup .selected").attr("itemid")) || 0;
        container.innerHTML = groups.map((group, index) => {
            return (
                `<div itemid="${index}" ${index === selectedGroupItemId ? 'class="selected"' : ""}>
                    <div class="group-header border" style="background-image: url('${group.flagImage}')">
                        <div class="group-title"><h1 data-text="${group.location}">${group.location}</h1></div>
                    </div>
                    ${getGroupContent(index, selectedGroupItemId)}
                </div>`
            )
        }).join("")

        addClickEventOnGroupHeader(groups, isLgDown);
    }
}

createGroup(groups, isLgDown);
