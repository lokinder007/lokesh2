import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Protected = (props) => {
  let Cmp = props.cmp
  
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/register");
        }
    },[])

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected
