import React from 'react'
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import Nav from '../../components/Nav/Nav'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Plans from '../../components/Plans/Plans'

const ProfileScreen = () => {
    const user = useSelector(selectUser);

    const logOut =()=>{
        signOut(auth)
    }
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src='https://i.pinimg.com/474x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg' alt='' />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreens__plans'>
                        <h3>Plans</h3>
                        <Plans />
                        <button className='profileScreen__signOut' onClick={logOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen