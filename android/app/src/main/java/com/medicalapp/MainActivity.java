package com.medicalapp;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import


public class MainActivity extends ReactActivity  implements OnImagePickerPermissionsCallback{


 private PermissionListener listener; // <- add this attribute

        // Your methods here

        // Copy from here

        @Override
        public void setPermissionListener(PermissionListener listener)
        {
            this.listener = listener;
        }

        @Override
        public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
        {
            if (listener != null)
            {
            listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
            }
            super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }

        // To here


     



    @Override
    protected String getMainComponentName() {
        return "MedicalApp";
    }
}
