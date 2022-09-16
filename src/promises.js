let is_ok = true

let production = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (is_ok) {
            resolve("OK")
        } else { 
            reject("KO")
        }
        }, 2000)
    }) 
}

production()
    .then(result => console.log(result))
    .catch(err => console.log(err))