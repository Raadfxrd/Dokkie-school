import "./hboictcloud-config";
import { api } from "@hboictcloud/api";

// Haal HTML-elementen op
let emailR: HTMLInputElement | null = document.querySelector("#emailR");
let passwordR: HTMLInputElement | null = document.querySelector("#passwordR");
let usernameR: HTMLInputElement | null = document.querySelector("#usernameR");
let name: HTMLInputElement | null = document.querySelector("#name");
let formR: HTMLInputElement | null = document.querySelector("#formR");

// Functie om gebruikers in database te steken
async function insertUserData(
    email: string,
    password: string,
    username: string,
    name: string
): Promise<void> {
    try {
        api.queryDatabase(
            "INSERT INTO user (email, password, username, name) VALUES (?,?,?,?)",
            email,
            password,
            username,
            name
        );

        location.href = "/index.html";
        return;
    } catch (reason) {
        console.log(reason);
    }
}
// Voeg een eventlistener toe voor het formulierinzendingsevenement
formR!.addEventListener("submit", function (e) {
    e.preventDefault();
    let emailRValue: string = emailR!.value;
    let passwordRValue: string = passwordR!.value;
    let usernameRValue: string = usernameR!.value;
    let nameValue: string = name!.value;
    insertUserData(emailRValue, passwordRValue, usernameRValue, nameValue);
});
