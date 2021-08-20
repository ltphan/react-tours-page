export async function fetchTours() {
    try {
        const response = await fetch("https://course-api.com/react-tours-project", {"Access-Control-Allow-Origin": "*"})
        const data = await response.json()
        return data
    } catch (e) {
        throw new Error("Failed at fetching tours data")
    }
}
