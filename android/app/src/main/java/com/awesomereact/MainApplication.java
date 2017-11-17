package com.awesomereact;
import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationApplication;
import com.react.rnspinkit.RNSpinkitPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication implements ReactApplication {

	@Override
	public boolean isDebug() {
		// Make sure you are using BuildConfig from your own application
		return BuildConfig.DEBUG;
	}

	@Override
	public List<ReactPackage> createAdditionalReactPackages() {
		    return Arrays.<ReactPackage>asList(
                        new MainReactPackage(),
                    new RNSpinkitPackage()

                );
	}
}