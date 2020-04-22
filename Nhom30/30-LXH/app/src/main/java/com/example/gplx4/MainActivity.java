package com.example.gplx4;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;


public class MainActivity extends AppCompatActivity {

    private static final String LOG_TAG = MainActivity.class.getName() ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().setElevation(0);
        setContentView(R.layout.activity_main);
    }

    public void launchHoclythuyet(View view) {
        Log.d(LOG_TAG,"Open hoc ly thuyet !");
        Intent lythuyetIntent = new Intent(this, LythuyetActivity.class);
        startActivity(lythuyetIntent);
    }

    public void launchThi(View view) {
        Log.d(LOG_TAG,"Open thi !");
        Intent thiIntent = new Intent(this, ThiActivity.class);
        startActivity(thiIntent);
    }

    public void launchBienbao(View view) {
        Log.d(LOG_TAG,"Open bien bao !");
        Intent bienbaoIntent = new Intent(this, BienbaoActivity.class);
        startActivity(bienbaoIntent);
    }

//    public void launchMeo(View view) {
//        Log.d(LOG_TAG,"Open meo thi !");
//        Intent meothiIntent = new Intent(this, MeothiActivity.class);
//        startActivity(meothiIntent);
//    }

    public void launchCausai(View view) {
        Log.d(LOG_TAG,"Open cau sai !");
        Intent causaiIntent = new Intent(this, CausaiActivity.class);
        startActivity(causaiIntent);
    }

    public void launchTracuu(View view) {
        Log.d(LOG_TAG,"Open tra cuu !");
        Intent tracuuIntent = new Intent(this,TracuuActivity.class);
        startActivity(tracuuIntent);
    }

    public void launchMeo(View view) {
        Log.d(LOG_TAG,"Open meo thi !");
        Intent meothiIntent = new Intent(this, MeothiActivity.class);
        startActivity(meothiIntent);
    }
}
