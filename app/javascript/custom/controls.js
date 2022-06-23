function fadeAndSlideOut(element, duration, func) {
    var seconds = duration / 1000;
    element.style.transition = `opacity ${seconds}s ease, margin-right ${seconds}s ease`;

    element.style.opacity = 0;
    element.style.marginRight = `-${element.clientWidth}px`;
    setTimeout(func, duration);
}

// NOTIFICATIONS: ===============================
const notifications = document.getElementsByClassName("notification");
if (notifications.length > 0) {
    setTimeout(() => {
        Array.from(notifications).forEach((notification) => {
            fadeAndSlideOut(notification, 1000, () => notification.remove());
        })
    }, 10000);
}

const notification_close_buttons = document.getElementsByClassName("close-btn");
Array.from(notification_close_buttons).forEach(btn => {
    btn.addEventListener("click", () => fadeAndSlideOut(btn.parentNode, 1000, () => btn.parentNode.remove()))
});
// ==============================================