// Luna Pizzeria – Frontend Logic
// Handles: mobile navigation, smooth scrolling, order modal, and basic form UX.

(function () {
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const heroOrderBtn = document.getElementById("heroOrderBtn");
    const openOrderModalBtn = document.getElementById("openOrderModalBtn");
    const orderModalBackdrop = document.getElementById("orderModalBackdrop");
    const closeOrderModalBtn = document.getElementById("closeOrderModalBtn");
    const orderNotifyForm = document.getElementById("orderNotifyForm");
    const orderModalConfirmation = document.getElementById("orderModalConfirmation");

    // Mobile menu toggle
    function toggleMobileNav() {
        const isOpen = mobileNav.classList.contains("mobile-nav--open");
        if (isOpen) {
            mobileNav.classList.remove("mobile-nav--open");
        } else {
            mobileNav.classList.add("mobile-nav--open");
        }
    }

    // Smooth scroll to order section
    function scrollToOrder() {
        const orderSection = document.getElementById("order");
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    // Open order modal
    function openOrderModal() {
        orderModalBackdrop.setAttribute("aria-hidden", "false");
        orderModalBackdrop.classList.add("modal-backdrop--visible");
    }

    // Close order modal
    function closeOrderModal() {
        orderModalBackdrop.setAttribute("aria-hidden", "true");
        orderModalBackdrop.classList.remove("modal-backdrop--visible");
    }

    // Handle notification form submit
    function handleOrderNotifySubmit(event) {
        event.preventDefault();
        orderNotifyForm.reset();
        orderModalConfirmation.hidden = false;
    }

    // Attach events
    document.addEventListener("DOMContentLoaded", () => {
        if (mobileBtn && mobileNav) {
            mobileBtn.addEventListener("click", toggleMobileNav);
        }

        if (heroOrderBtn) {
            heroOrderBtn.addEventListener("click", scrollToOrder);
        }

        if (openOrderModalBtn && orderModalBackdrop) {
            openOrderModalBtn.addEventListener("click", openOrderModal);
        }

        if (closeOrderModalBtn) {
            closeOrderModalBtn.addEventListener("click", closeOrderModal);
        }

        if (orderModalBackdrop) {
            orderModalBackdrop.addEventListener("click", (event) => {
                if (event.target === orderModalBackdrop) {
                    closeOrderModal();
                }
            });
        }

        if (orderNotifyForm) {
            orderNotifyForm.addEventListener("submit", handleOrderNotifySubmit);
        }
    });
})();
