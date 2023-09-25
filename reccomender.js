const fetch = require("node-fetch")



function filterBikes(bikeData) {
    const matchingBikes = {}

    for (const modelName in bikeData) {
        if (bikeData.hasOwnProperty(modelName)) {
            const bike = bikeData[modelName]
            const { brand, type, price } = bike

            if (priceInpt <= price && typeInpt === type && brandInpt === brand) {
                matchingBikes[modelName] = bike
            }
        }
    }

    return matchingBikes
}

async function getData() {
    const resp = await fetch('blabla.csv')
    const data = await resp.text()

    const bikeData = {}

    const table = data.split('\n').slice(1)
    table.forEach(row => {
        const cols = row.split(',')
        const brand = cols[0]
        const type = cols[1]
        const modelName = cols[2]
        const price = parseFloat(cols[3])

        bikeData[modelName] = { brand, type, price }
        
    })

    return bikeData
}

module.exports = {
    filterBikes,
    getData,
}
