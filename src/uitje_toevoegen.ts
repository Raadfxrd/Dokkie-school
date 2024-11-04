import "./hboictcloud-config"; // Preparatie SQL
import { api } from "@hboictcloud/api";
import "./check-login";
import { logOut } from "./check-login";

const description: HTMLInputElement = document.querySelector("#description") as HTMLInputElement;
const submitbtn: HTMLInputElement = document.querySelector("#toevoegen") as HTMLInputElement;

submitbtn.addEventListener("click", handle);
async function handle(evt: any): Promise<void> {
    evt.preventDefault();
    const descriptionvalue: string = description.value;
    try {
        await api.queryDatabase("INSERT INTO event (description) VALUES (?)", descriptionvalue);

        location.href = "/uitjes_toevoegen.html";
        return;
    } catch (reason) {
        console.log(reason);
    }
}

const logout: HTMLInputElement = document.querySelector("#logout") as HTMLInputElement;
logout.addEventListener("click", () => {
    logOut();
});
