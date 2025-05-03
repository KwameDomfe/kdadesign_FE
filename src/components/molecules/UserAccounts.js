import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../images/placeholders/regular_images/avatar-01.png'
const UserAccounts = ({userAccountsClick}) => {
  return (
    <div className="
        f0-75"
    >
        <div className="bg-gray br-50 ba bw1 b--gray mh0-50 ttu tc "
            onClick={userAccountsClick}
        >
            <Link to="/"
                className="white-90  "
            >
                <img src={ avatar }
                    className="w2-00 h2-00 br-50 ba bw cover"
                    alt="{ mainNavElement.name }"
                />
            </Link>
        </div> 
    </div>
  )
}

export default UserAccounts