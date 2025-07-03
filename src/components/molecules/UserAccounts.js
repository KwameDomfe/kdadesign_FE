import React from 'react'
// import { Link } from 'react-router-dom'
import avatar from '../../images/placeholders/regular_images/avatar-01.png'
const UserAccounts = ({userAccountsClick}) => {
  return (
        <figure id=""
            className=" flex justify-center items-center
            h-100
            "
            onClick={userAccountsClick}
        >
            <img src={ avatar }
                className="w2-00 h2-00 mr0-50 br-50 ba bw1 b--gray cover"
                alt="{ mainNavElement.name }"
            />
            <figcaption className="f0-75">
                <h2 className="mb0-25">
                    Kwaku Appau
                </h2>
                <small>kuku@kdadesign.tech</small>
            </figcaption>
        </figure> 
  )
}

export default UserAccounts