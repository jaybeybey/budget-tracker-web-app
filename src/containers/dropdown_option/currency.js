import React from 'react'

const currency = [
    {name: 'Select Currency', value: ''},
    {name:'USD', value: '$'},
    {name:'EUR', value: '€'},
    {name:'JPY', value: '¥'},
    {name:'GBP', value: '£'},
    {name:'AUD', value: 'A$'},
    {name:'CAD', value: 'C$'},
    {name:'CHF', value: 'CHF'},
    {name:'CNH', value: '¥'},
    {name:'SEK', value: 'kr'},
    {name:'NZD', value: '$'},
]

const mappedCurrency = currency.map((item,index)=>{
    return (
        <option 
        key={index}
        value={item.value}>
        {item.name}
        </option>
    )
})

export default mappedCurrency;

