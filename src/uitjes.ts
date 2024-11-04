import "./hboictcloud-config"; // Preparatie SQL
import { api } from "@hboictcloud/api";
import "./check-login";
import { logOut } from "./check-login";

const eventsBlock: HTMLDivElement = document.querySelector("#uitjes") as HTMLDivElement;

async function getEvents(): Promise<void> {
    try {
        const result: Array<any> = (await api.queryDatabase("SELECT * FROM event")) as Array<any>;

        result.forEach((value) => {
            eventsBlock.appendChild(createEventNode(value.description));
        });
    } catch (reason) {
        console.log(reason);
    }
}

function createEventNode(description: string): HTMLDivElement {
    const event: HTMLDivElement = document.createElement("div");

    event.classList.add("uitje");
    event.innerHTML = description;
    
    return event;
}

getEvents();

const logout: HTMLInputElement = document.querySelector("#logout") as HTMLInputElement;
logout.addEventListener("click", () => {
    logOut();
});
