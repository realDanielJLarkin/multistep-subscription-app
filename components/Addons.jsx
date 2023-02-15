import { useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"

import styles from '../styles/Addons.module.css'
import AddonsCard from "./AddonsCard"

import addons from "@/data/addons"


function Addons() {

    const context = useContext(AppContext)
    const [addonArry, setAddonArry] = useState(context.addonsContext)

    return (
        <>
            <h1 className={styles.heading}>Pick add-ons</h1>
            <p className={styles.subHeading}>Add-ons help to enhance your gaming experience.</p>
            <div className={styles.container}>
                {
                    addons.map((addon) => (
                        <AddonsCard
                            key={addon.id}
                            id={addon.id}
                            title={addon.title}
                            body={addon.body}
                            priceMonthly={addon.priceMonthly}
                            priceYearly={addon.priceYearly}
                            selectedDiv={addon.selectedDiv}
                            addonArry={addonArry}
                            setAddonArry={setAddonArry}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Addons



    // < div id = "two" className = "service-card" onClick = {(() => handleClick("2"))}>
    //                 <div className="picker">
    //                     <label className="checkbox-container">
    //                         <input id="2" type="checkbox" />
    //                         <span className="checkmark"></span>
    //                     </label>
    //                 </div>
    //                 <div className="info">
    //                     <h2>Extra storage</h2>
    //                     <p >Extra 1TB of cloud storage</p>
    //                 </div>
    //                 <div className="price">
    //                     <span>{prices.two}</span>
    //                 </div>
    //             </div >
    // <div id="three" className="service-card" onClick={(() => handleClick("3"))}>
    //     <div className="picker">
    //         <label className="checkbox-container">
    //             <input id="3" type="checkbox" />
    //             <span className="checkmark"></span>
    //         </label>
    //     </div>
    //     <div className="info">
    //         <h2>Customizable profile</h2>
    //         <p>Custom theme on your prfile</p>
    //     </div>
    //     <div className="price">
    //         <span>{prices.two}</span>
    //     </div>
    // </div>