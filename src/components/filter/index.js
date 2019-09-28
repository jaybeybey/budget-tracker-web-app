import React, { Component } from 'react'

import './styles.css'

import Expenses from '../expenseList'

class Filter extends Component {
    state = {
        search: ''
    }
    updateSearch = (e) => {
        this.setState({
            search: e.target.value.substr(0, 18)
        })
    }
    render() {
        return (
            <>
                <div className='filter'>
                    <form>
                        <label>
                            <h6>Search</h6>
                            <input type='text'
                                value={this.state.search}
                                onChange={this.updateSearch}
                            />
                        </label>
                    </form>
                </div>
                <>
                    <Expenses search={this.state.search}/>
                </>
            </>
        )
    }
}

export default Filter;
