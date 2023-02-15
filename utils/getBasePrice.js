const getBasePrice = (plan, cycle) => {



    if (plan === 'arcade') {
        if (cycle === 'monthly') {
            // setBasePrice(9)
            return 9
        } else {
            // setBasePrice(90)
            return 90
        }
    } else if (plan === 'advanced') {
        if (cycle === 'monthly') {
            // setBasePrice(12)
            return 12
        } else {
            // setBasePrice(120)
            return 120
        }
    } else if (plan === 'pro') {
        if (cycle === 'monthly') {
            // setBasePrice(15)
            return 15
        } else {
            // setBasePrice(150)
            return 150
        }
    }
}

export default getBasePrice