import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import {HomeObjOne, HomeObjThree, HomeObjTwo} from './Data'
const Home = () => {
    return (
        <>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjThree}/>
        </>
    )
}

export default Home
