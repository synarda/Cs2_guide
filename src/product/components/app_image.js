import React from 'react';
import { Image } from 'react-native';
import { imagesPaths } from '../constants/paths';

const AppImage = ({
    source,
    resizeMode = 'cover',
    style = { width: 100, height: 100 },
}) => {
    return (
        <Image
            source={source || imagesPaths.noImage}
            resizeMode={resizeMode}
            style={style}
        />
    );
};

export default AppImage;
