import firebase from 'react-native-firebase'
import { Platform } from 'react-native'

class  FirebaseAd  {
    buildRequest = () => {
        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
        request.addKeyword('English').addKeyword('Learning');
        return request;
    }

    showInterstitial = () => {
        const unitIdInterstitial = 'ca-app-pub-2790588623787228/7119709133';
        const adInterstitial = firebase.admob().interstitial(unitIdInterstitial);
        const request = this.buildRequest();
        // Load the advert with our AdRequest
        adInterstitial.loadAd(request.build());
        adInterstitial.on('onAdLoaded', () => {
            if (adInterstitial.isLoaded()) {
                adInterstitial.show();
            } else {
                console.log("can't load");
            }
        });
        
        adInterstitial.on('onAdFailedToLoad', (error) => {
            console.log('Ad failed to load');
            console.log(error);
        });
    }
}

export const firebaseAd = new FirebaseAd

export const UNIT_ID_BANNER = 'ca-app-pub-4274159613831487/5761386270'

export const Banner = firebase.admob.Banner