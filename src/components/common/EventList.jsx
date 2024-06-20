import React from 'react';

const EventList = ({ events }) => (
    <div>
        {events.map((event, index) => (
            <p key={index}>{event.name}</p>
        ))}
    </div>
);

export default EventList;
