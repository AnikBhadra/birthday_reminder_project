import React from 'react'
import data from './data'

const List = (props) => {
    const data = props.people
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
