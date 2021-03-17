import React from 'react'
import './DropDown.css'

const DropDown = ({snack, setSnack}) =>{
    // const [snack, setSnack] = useState("");

    const onOptionChange = (e) =>{
        setSnack(e.target.value)
    }
    return(
        <>
            <h2>What is your favorite snack?</h2>
                <select id="selectSnack"
                onChange={onOptionChange}
                value={snack}
                >
                    <option disabled value="">Select snack</option>
                    <option value="popcorn">Popcorn</option>
                    <option value="chips">Chips</option>
                    <option value="choclate">Choclate</option>
                    <option value="candy">Mixed candy</option>
                    <option value="ice-cream">Ice cream</option>
                </select>
            <p>you live in {snack}</p>
        </>
    )
}

export default DropDown