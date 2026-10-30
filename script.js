
// ELEMENTS
const runawayBtn = document.getElementById("runawayBtn");
const playground = document.querySelector(".playground");
const heading = document.getElementById("heading");
const hint = document.getElementById("hint");

const moodBtn = document.getElementById("moodBtn");
const secretBtn = document.getElementById("secretBtn");
const leaveBtn = document.getElementById("leaveBtn");

const message = document.getElementById("message");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");


// 1. RUNAWAY BUTTON

let escapeCount = 0;

function moveButton() {
    const maxX = playground.clientWidth - runawayBtn.offsetWidth;
    const maxY = playground.clientHeight - runawayBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    runawayBtn.style.left = randomX + "px";
    runawayBtn.style.top = randomY + "px";
    runawayBtn.style.transform = "none";

    escapeCount++;

    hint.textContent = `You've tried ${escapeCount} times. Give up already!`;

    if (escapeCount === 5) {
        showToast("Stop chasing me! 😭");
    }

    if (escapeCount === 10) {
        showToast("You seriously need a hobby.");
    }
}

runawayBtn.addEventListener("pointerenter", moveButton);

runawayBtn.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
        event.preventDefault();
        moveButton();
    }
});

runawayBtn.addEventListener("click", () => {
    message.textContent = "IMPOSSIBLE! YOU ACTUALLY CAUGHT ME?!";
});


// 2. HEADING CHANGES ON HOVER

heading.addEventListener("mouseenter", () => {
    heading.innerHTML = 'Nice try. <span>I saw that.</span>';
});

heading.addEventListener("mouseleave", () => {
    heading.innerHTML = 'You are in <span>control.</span>';
});


// 3. CHANGE BACKGROUND MOOD

const moods = [
    "linear-gradient(135deg, #0b0b10, #24113a)",
    "linear-gradient(135deg, #0b0b10, #102d35)",
    "linear-gradient(135deg, #0b0b10, #351522)",
    "linear-gradient(135deg, #0b0b10, #29213d)",
    "linear-gradient(135deg, #0b0b10, #193222)"
];

let moodIndex = 0;

moodBtn.addEventListener("click", () => {
    moodIndex = (moodIndex + 1) % moods.length;

    document.body.style.background = moods[moodIndex];

    showToast("Ahh, much better. ✨");
});


// 4. SECRET BUTTON

secretBtn.addEventListener("click", () => {
    message.textContent = "SECRET UNLOCKED: You have absolutely no life. 😂";

    secretBtn.textContent = "Secret revealed!";
    showToast("You weren't supposed to find that!");
});


// 5. FAKE EXIT BUTTON

leaveBtn.addEventListener("click", () => {
    const messages = [
        "Nope. You're staying here.",
        "The exit is under maintenance.",
        "Are you seriously leaving me?",
        "Just five more minutes!",
        "I thought we were friends. 🥺"
    ];

    const randomMessage = messages[
        Math.floor(Math.random() * messages.length)
    ];

    message.textContent = randomMessage;

    leaveBtn.textContent = "Try again";
});


// 6. FAKE NOTIFICATIONS

const notifications = [
    "👀 I'm watching you.",
    "🤨 Why are you still here?",
    "⚠️ Your mouse is acting suspicious.",
    "😂 Nice attempt.",
    "🫣 Don't touch anything.",
    "💜 Have a wonderful day!",
    "🤖 Website intelligence activated."
];

function showToast(text) {
    toastText.textContent = text;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


// RANDOM NOTIFICATIONS EVERY 12 SECONDS

setInterval(() => {
    const randomNotification = notifications[
        Math.floor(Math.random() * notifications.length)
    ];

    showToast(randomNotification);

}, 12000);


// FIRST NOTIFICATION

setTimeout(() => {
    showToast("Welcome! We hope you don't enjoy your stay. 😈");
}, 2000);
