import React from 'react'

const List = ({ dummyData }) => {
    return (
        <div className='centered width-80 test'>
            {dummyData?.map((item, index) => {
                return (
                    <div key={index} className='grid-apart w-full'>
                        <div> <p>{item.clientId}</p></div>
                        <div> <p>{item.document}</p></div>
                        <div> <p>{item.email}</p></div>
                        <div> <p>{item.action}</p></div>
                        <div> <p>{item.observations}</p></div>
                         <p>{item.date}</p>
                    </div>)
            })}
        </div>
    )
}

export default List