// Simple helper to keep the year in the footer updated
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Booking form -> build mailto link
    const form = document.getElementById("booking-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name") || "";
        const email = formData.get("email") || "";
        const phone = formData.get("phone") || "";
        const date = formData.get("date") || "";
        const eventType = formData.get("eventType") || "";
        const message = formData.get("message") || "";

        // TODO: Ret denne e-mail-adresse til din rigtige booking-mail
        const to = "booking@ditdomaene.dk";

        const subject = encodeURIComponent("Bookingforespørgsel – " + name);
        const bodyLines = [
            "Navn: " + name,
            "E-mail: " + email,
            phone ? "Telefon: " + phone : null,
            "Ønsket dato: " + date,
            "Type arrangement: " + eventType,
            "",
            "Besked:",
            message,
            "",
            "——",
            "Sendt via mortenbmusic.dk"
        ].filter(Boolean);

        const body = encodeURIComponent(bodyLines.join("\n"));

        window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
});
