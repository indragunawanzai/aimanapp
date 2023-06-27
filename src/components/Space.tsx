import React from 'react'
import { View } from 'react-native'

interface SpaceProps {
    height?: number;
    width?: number;
}

export const Space: React.FC<SpaceProps> = ({ height, width }) => {
    return (
        <View style={{ height: height, width: width }} />
    )
}
