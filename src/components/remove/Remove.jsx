import React from 'react'

function Remove(props) {
    return (
        <button
            className='remove'
            onClick={() => {
                for (let i in props.array) {
                    let element = props.array[i].nameDrink.toUpperCase().toString()
                    if (element === props.nameDrink1.toString().toUpperCase()) {
                        props.removeDrink(props.array, props.setArrayShop, props.nameDrink1)
                    }
                }
            }
            }
        >
            Remove
        </button >
    )
}

export default Remove