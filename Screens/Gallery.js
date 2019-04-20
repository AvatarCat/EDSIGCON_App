import React from 'react';
import styles from '../styles'
import MasonryList from "react-native-masonry-list";

class Gallery extends React.Component {
    state = {}
     componentWillMount() {}
    
     render() {
         return (
            <MasonryList
                images={[
                    // Can be used with different image object fieldnames.
                    // Ex. source, source.uri, uri, URI, url, URL
                    { source: require("../assets/blueRose.jpg"), 
                        // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                        // to include a dimensions field with the
                        // actual width and height of the image or
                        // it will throw an error.
                        dimensions: { width: 1080, height: 1920 },
                        resizeMode: 'contain'
                    },
                    { source: require("../assets/cuteCat.jpg"),
                        // An alternative to the dimensions field.
                        // This will also be acceptable.
                        width: 1080, height: 1920 },
                    { source: require('../assets/sugarGlider.jpg'),
                        dimensions: { width: 1080, height: 1920 } },
                    { source: require('../assets/panda.jpg'),
                        // Optional: Adding a dimensions field with
                        // the actual width and height for REMOTE IMAGES
                        // will help improve performance.
                        dimensions: { width: 1080, height: 1920 } },
                    { source: require('../assets/cuteAnimal.jpg'),
                        dimensions: { width: 1080, height: 1920 } },
                        // Optional: Does not require an id for each
                        // image object, but is for best practices.
                    { source: require('../assets/sloth.jpg'),
                        dimensions: { width: 1080, height: 1920 } },
                    { source: require('../assets/tinyGecko.jpg'),
                        dimensions: { width: 1080, height: 1920 } },
                ]}
            />
         )
    }
}

export default Gallery;