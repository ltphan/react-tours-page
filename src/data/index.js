export async function fetchTours() {
    try {
        const response = await fetch("https://course-api.com/react-tours-project", 
        {"Access-Control-Allow-Origin": "*"
    })
        if (!response.ok) {
            throw new Error("Failed at fetching tours data")  
        }
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e.message)
        return false
    }
    
}
