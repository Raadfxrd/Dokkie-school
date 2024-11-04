import { session } from "@hboictcloud/api";

const userId: number = session.get("userId");

// Als gebruiker niet ingelogd, terugsturen naar loginpagina "registreren.html"
if (userId === undefined) {
    console.log("Geen data in opslag -> uitloggen");
    location.href = "/registreren.html";
}

// Als logout button geklikt, clear storage en reload pagina waardoor terugsturen naar loginpagina
export function logOut(): void {
    localStorage.clear();
    location.reload();
}
