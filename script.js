const characterList = document.getElementById("character-list");

characters.forEach(character => {

    const button = document.createElement("button");

    button.textContent = character.name;

    button.onclick = () => loadCharacter(character);

    characterList.appendChild(button);

});
