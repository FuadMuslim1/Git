/**
 * Loads the words data from words.json.
 * @returns {Promise<Object>} - The words data object.
 */
export async function getWordsData() {
    try {
        const response = await fetch('../data/words.json'); // Sesuaikan path
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading words data:', error);
        return {};
    }
}