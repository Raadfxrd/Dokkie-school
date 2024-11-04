import "./hboictcloud-config"; // Preparatie SQL
import { session, url } from "@hboictcloud/api";

// verkrijg scrollbutton
let mybutton: HTMLElement | null = document.getElementById("scrollBtn");
// Als gebruiker 200 pixels naar bededen scrollt -> Laat button zien
window.onscroll = function (): void {
    scrollFunction();
};
function scrollFunction(): void {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton!.style.opacity = "1";
    } else {
        mybutton!.style.opacity = "0";
    }
}
// Als gebruiker klikt -> Go to top
mybutton!.addEventListener("click", (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// Logica dropdown menu
document.addEventListener("click", handle);
function handle(evt: any): void {
    if (evt.target.classList?.contains("question")) {
        document.querySelector(".active")?.classList.remove("active");
        return evt.target.classList.add("active");
    }
}
const logoutbutton: HTMLElement | null = document.getElementById("logout");
const userId: number = session.get("userId");

if (userId === undefined) {
    logoutbutton!.style.display = "none";
    console.log(localStorage);
} else {
    logoutbutton!.style.display = "block";
}

export function logOut(): void {
    localStorage.clear();
    url.redirect("registreren.html");
}

// Logout button en ervoor zorgen dat deze op elke pagina werkt
const logout: HTMLInputElement = document.querySelector("#logout") as HTMLInputElement;
logout.addEventListener("click", () => {
    logOut();
});
