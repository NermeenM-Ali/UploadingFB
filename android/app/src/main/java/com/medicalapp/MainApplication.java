package com.medicalapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.barefootcoders.android.react.KDSocialShare.KDSocialShare;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import android.content.Intent;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;


import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage;

import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import ui.toasty.RNToastyPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import suraj.tiwari.reactnativefbads.FBAdsPackage;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.CallbackManager;
import com.oblador.vectoricons.VectorIconsPackage;
import org.wonday.pdf.RCTPdfView;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.safaeean.barcodescanner.BarcodeScannerPackage;
import com.airbnb.android.react.maps.MapsPackage;
import org.reactnative.camera.RNCameraPackage;
//import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.imagepicker.ImagePickerPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.dylanvann.fastimage.FastImageViewPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();
    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
      }
 

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new KDSocialShare(),
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseDatabasePackage(),
            new RNFirebaseStoragePackage(),
            new ReactNativeLocalizationPackage(),
            new RNToastyPackage(),
            new RNGestureHandlerPackage(),
            new ReactNativeRestartPackage(),
            new VectorIconsPackage(),
            new FBSDKPackage(mCallbackManager),
            new FBAdsPackage(),
            new RCTPdfView(),
            new RNFetchBlobPackage(),
            new BarcodeScannerPackage(),
            new MapsPackage(),
            new RNCameraPackage(),
            new ImagePickerPackage(),
            new PickerPackage(),
            new FastImageViewPackage(),
            new LottiePackage()
      );
    }




    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
       FacebookSdk.sdkInitialize(getApplicationContext());
       AppEventsLogger.activateApp(this);
      SoLoader.init(this, /* native exopackage */ false);
  }
}
