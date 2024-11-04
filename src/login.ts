import "./hboictcloud-config";
import { api, session } from "@hboictcloud/api";

// Haal HTML-elementen op
let usernameL: HTMLInputElement | null = document.querySelector("#usernameL");
let passwordL: HTMLInputElement | null = document.querySelector("#passwordL");
let formL: HTMLInputElement | null = document.querySelector("#formL");
let errorMessage: HTMLElement | null = document.querySelector("#error-message");

// Functie voor controleren bestaande gebruiker of niet
async function insertUserData(username: string, password: string): Promise<void> {
    try {
        //Query de database om gebruikersgegevens te controleren
        const result: Array<any> = (await api.queryDatabase(
            "SELECT * FROM user WHERE username = ? AND password = ?",
            username,
            password
        )) as Array<any>;

        if (result.length > 0) {
            session.set("userId", result[0].userId);
            session.set("username", result[0].username);
            location.href = "/uitjes.html";
        } else {
            errorMessage!.textContent = "invalid mail or password";
        }
    } catch (reason) {
        console.log(reason);
    }
}
formL!.addEventListener("submit", function (e) {
    e.preventDefault();
    let usernameLValue: string = usernameL!.value;
    let passwordLValue: string = passwordL!.value;
    insertUserData(usernameLValue, passwordLValue);
});
