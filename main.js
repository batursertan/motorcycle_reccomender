const prompt = require("prompt-sync")()
const { getData } = require('./reccomender.js')
const { filterBikes } = require('./reccomender.js')


async function main(){
    const priceInpt = parseInt(prompt("What is your price range: "))
    const typeInpt = prompt("What is your desired bike type: ")
    const brandInpt = prompt("What is your desired bike brand: ")
   
    console.log('--searching for matching bikes--')

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

main()

console.log('ride like thunder')





