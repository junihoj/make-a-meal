import { Platform } from 'react-native';

const cardShadows = {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
};

export default cardShadows;
