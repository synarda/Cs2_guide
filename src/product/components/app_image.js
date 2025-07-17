import React, { useState } from 'react';
import { Image } from 'react-native';
import { imagesPaths } from '../constants/paths';


const AppImage = ({
    source,
    resizeMode = 'cover',
    style = { width: 100, height: 100 },
}) => {
    const [hasError, setHasError] = useState(false);


    let finalSource = source;

    if (hasError) {
        finalSource = imagesPaths.noImage;
    }

    if (typeof finalSource === 'string') {
        finalSource = { uri: finalSource };
    }

    return (
        <Image
            source={finalSource}
            resizeMode={resizeMode}
            style={style}
            onError={() => setHasError(true)}
        />
    );
};

export default AppImage;
