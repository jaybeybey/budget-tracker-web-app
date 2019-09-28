import React, { Component } from 'react'
import currency from './currency'

export default class TestComponent extends Component {
    render() {
        console.log(currency.map((item,index)=>index))
        return (
            <div>
                <form>
                    <label>
                        Category
                    </label>
                    <select>
                        {currency.map((item,index)=>{
                            return (
                                <option key={index}>{item.name}</option>
                            )
                        })}
                    </select>
                </form>
            </div>
        )
    }
}
