import React from 'react'
import data from './data'

const List = (props) => {
    return (
        <>
            {data.map((people) => {
                return (

                    <h2>{people.name}</h2>
                )
            })}

        </>
    )
}

export default List
