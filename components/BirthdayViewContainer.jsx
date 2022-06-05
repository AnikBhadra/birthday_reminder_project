import React from 'react'
import List from './List'
import data from './data'


function BirthdayViewContainer() {
    return (
        <div>
            <main>
                <section className="container">
                    {/* Create a h3 element below*/}
                    <h3>{data.length} Birthdays Today</h3>

                    {/* pass data to list component */}
                    <List people={data} />
                </section>
            </main>
        </div>
    );
}

export default BirthdayViewContainer
