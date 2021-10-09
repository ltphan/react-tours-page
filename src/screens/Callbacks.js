const Callbacks = () => {

    getData("./json/linh.json", (err, data) => {
        if (!err) {
            console.log("error in linh.json")
        } else {
            console.log("linh.json", data)
            getData("./json/mario.json", (err, data) => {
                if (!err) {
                    console.log("error in mario.json")
                } else {
                    console.log("mario.json", data)
                    getData("./json/luigi.json", (err, data) => {
                        if (!err) {
                            console.log("error in luigi.json")
                        } else {
                            console.log("luigi.json", data)
                        }
                    })
                }
            })
        }
    })

    return (
        <div>
            {"Dealing with Callback Hell"}
        </div>
    )
}

export default Callbacks

// const getData = (ms, callback) => {
//     if (ms > 0) {
//         console.log("hit in the if statement")
//         return callback(ms.toString())
//     } else {
//         console.log("hit outside the if statement")
//         callback(ms.toString())
//     }
// }

// setTimeouts for callbacks JSON using fetch 


const getData = async (jsonFile, callback) => {
    const response = await fetch(jsonFile)
    if (response.status === 200) {
        const data = await response.json()
        callback("fetched data", data)
    } else {
        callback(undefined, "could not fetch data")
    }
}
