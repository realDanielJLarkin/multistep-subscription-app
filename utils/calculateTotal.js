const calculateTotal = (addonArry, term, basePrice, totalPrice) => {
    if (term === 'mo') {
        if (addonArry.length > 0) {
            let addonsSum = 0
            addonArry.map(((addon) => addonsSum += addon.monthlyPrice))

            return addonsSum + basePrice
        } else {

            return basePrice
        }
    } else {
        if (addonArry.length > 0) {
            let addonsSum = 0
            addonArry.map(((addon) => addonsSum += addon.yearlyPrice))

            return addonsSum + basePrice
        } else {
            return basePrice
        }

    }
}

export default calculateTotal