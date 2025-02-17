const BASE_URL = "http://localhost:5000/fruits"

export const getAllFruits = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data
    } catch (error) {
        console.error("Error fetching all fruits: ", error);
        return [];
    }
}