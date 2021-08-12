export async function fetchTours() {
    try {
        const response = await fetch("https://course-api.com/react-tours-project")
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}
