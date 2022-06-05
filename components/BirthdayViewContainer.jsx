import { React, useState } from 'react'
import List from './List'
import data from './data'


function BirthdayViewContainer() {
    // create a state variable here
    const [People, setPeople] = useState(data)
    // this should clear all records
    function clearAllRecords() {
        setPeople([])
    }
    return (
        <main>
            <section className="container">
                {/* change this to state variable data */}
                <h3>{People.length} birthdays today</h3>
                <List people={People} />
                <button onClick={clearAllRecords}>Clear All</button>
            </section>
        </main>
    )
}

export default BirthdayViewContainer
