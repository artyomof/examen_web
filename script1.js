document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("ul li");
    listItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.border = "2px solid red";
        });
        item.addEventListener("mouseleave", () => {
            item.style.border = "1px solid transparent";
        });
    });
});