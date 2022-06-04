import React from 'react'
import List from './List'


function BirthdayViewContainer() {
    return (
        <div>
            <main>
                <section className="container">
                    {/* Create a h3 element below*/}
                    <h3>0 birthdays today</h3>
                    <List />
                </section>
            </main>
        </div>
    );
}

export default BirthdayViewContainer
