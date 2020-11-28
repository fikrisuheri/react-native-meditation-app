import React from 'react'
import { ILCharkra } from '../../assets'
import { OnBoarding } from '../../components'

function index({ navigation }) {
    return (
        <OnBoarding
            title="MediApp"
            subtitle="Meditasi Chakra"
            description="Meditasi chakra dimulai dengan duduk dalam posisi yang nyaman dengan punggung lurus tetapi tidak tegang."
            ilustration={<ILCharkra/>}
            onNext={() => navigation.replace('Primordial')}
            onSkip={() => navigation.replace('Home')}
        />
    )
}

export default index
