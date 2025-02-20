export function toggleLanguage() {
    document.body.classList.toggle('uk');
}

export function getCurrentLanguage() {
    return document.body.classList.contains('uk') ? 'uk' : 'en';
}