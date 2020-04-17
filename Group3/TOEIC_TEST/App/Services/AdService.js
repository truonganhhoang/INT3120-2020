import firebase from 'react-native-firebase'
import { Platform } from 'react-native'

class AdService {

    // getUnitIdBanner = () => {
    //     const unitIdBanner = 'ca-app-pub-3940256099942544/6300978111'
    //     return unitIdBanner;
    // }
    // this.unitIdBanner = 'ca-app-pub-3940256099942544/6300978111';
    // this.unitIdInterstitial = 'ca-app-pub-3940256099942544/1033173712';
    // this.Banner = firebase.admob.Banner;
    // this.adInterstitial = firebase.admob().interstitial(this.unitIdInterstitial);
    // this.request = new AdRequest();
    // request.addKeyword('English').addKeyword('Learning');

    showInterstitial = () => {
        const unitIdInterstitial = 'ca-app-pub-3940256099942544/1033173712';
        const adInterstitial = firebase.admob().interstitial(unitIdInterstitial);
        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
        request.addKeyword('English').addKeyword('Learning');

        // Load the advert with our AdRequest
        adInterstitial.loadAd(request.build());

        adInterstitial.on('onAdLoaded', () => {
            console.log('Advert ready to show.');
            // console.log(advert.isLoaded());
            setTimeout(() => {
                if (adInterstitial.isLoaded()) {
                    adInterstitial.show();
                } else {
                    console.log("cant load");
                }
            }, 1000);
        });


        adInterstitial.on('onAdFailedToLoad', (error) => {
            console.log('Ad failed to load');
            console.log(error);
        });
    }
}

export const adService = new AdService