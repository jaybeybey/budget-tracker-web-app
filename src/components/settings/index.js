import React from 'react'
// import { connect } from 'react-redux'

// import { updateUser } from '../../store/actions'
import './styles.css'

import FormSettings from './form'

const Settings = () => {
    // const onSubmit = (e, user) => {
    //     e.preventDefault();
    //     props.dispatch(updateUser(user))
    // }
    return (
        <div className='setting-container'>
            <FormSettings />
        </div>
    )
}

export default Settings;
// export default connect()(Settings)