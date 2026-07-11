const characterList = document.getElementById("character-list");

characters.forEach(character => {

    const button = document.createElement("button");

    button.textContent = character.name;

    button.onclick = () => loadCharacter(character);

    characterList.appendChild(button);

});


function loadCharacter(character) {

    document.getElementById("name").textContent = character.name;

    document.getElementById("house").textContent = character.house;

    document.getElementById("birthday").textContent = character.birthday;

    document.getElementById("crest").textContent = character.crest;

    document.getElementById("baseClass").textContent = character.baseClass;


    // Portrait
    document.getElementById("portrait").src = character.portrait;


    // Personal ability
    document.getElementById("personalAbility").textContent = character.ability[0];


    // Starting abilities
    const abilityList = document.getElementById("startingAbilities");

    abilityList.innerHTML = "";

    character.ability.forEach(ability => {

        const li = document.createElement("li");

        li.textContent = ability;

        abilityList.appendChild(li);

    });


    // Inventory
    const inventoryList = document.getElementById("inventory");

    inventoryList.innerHTML = "";

    character.inventory.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        inventoryList.appendChild(li);

    });


    // Stats
    const statsRow = document.getElementById("statsRow");

    statsRow.innerHTML = "";

    Object.values(character.stats).forEach(stat => {

        const td = document.createElement("td");

        td.textContent = stat;

        statsRow.appendChild(td);

    });


    // Growths
    const growthRow = document.getElementById("growthRow");

    growthRow.innerHTML = "";

    Object.values(character.growths).forEach(growth => {

        const td = document.createElement("td");

        td.textContent = growth + "%";

        growthRow.appendChild(td);

    });


    // Combat Arts
    const combatArts = document.getElementById("combatArts");

    combatArts.innerHTML = "";

    character.combat_arts.forEach(art => {

        const li = document.createElement("li");

        li.textContent = art;

        combatArts.appendChild(li);

    });

}
