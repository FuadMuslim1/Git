// Navigasi yang berfungsi untuk Main Menu (index.html)
document.addEventListener('DOMContentLoaded', () => {
    const pronunciationBtn = document.getElementById('btn-pronunciation');
    // const speakingBtn = document.getElementById('btn-speaking'); // Tambahkan tombol lain jika perlu

    if (pronunciationBtn) {
        pronunciationBtn.addEventListener('click', () => {
            window.location.href = 'pronunciation.html';
        });
    }

    // Tambahkan navigasi untuk Speaking, Vocabulary, Grammar di sini.
});