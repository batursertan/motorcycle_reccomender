const prompt = require("prompt-sync")()


async function main(){
    const priceInpt = parseInt(prompt("What is your price range: "))
    console.log(`I like your ${priceInpt} price`)
    
    const typeInpt = prompt("What is your desired bike type: ")
    console.log(`I like your ${typeInpt} type`)
    
    const brandInpt = prompt("What is your desired bike brand: ")
    console.log(`I like your ${brandInpt} brand`)


    const bikeData = await getData();
    const matchingBikes = filterBikes(bikeData)

    if (Object.keys(matchingBikes).length > 0) {
        console.log("Matching Bikes:")
        for (const modelName in matchingBikes) {
            if (matchingBikes.hasOwnProperty(modelName)) {
                const bike = matchingBikes[modelName]
                console.log(`${modelName}, ${bike.brand}, ${bike.type}, ${bike.price}`)
            }
        }
    } else {
        console.log("No matching bikes found.")
    }



}

console.log('ride like thunder')





