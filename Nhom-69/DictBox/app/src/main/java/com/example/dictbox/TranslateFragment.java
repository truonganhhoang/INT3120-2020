package com.example.dictbox;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.speech.RecognizerIntent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Locale;

import java.io.BufferedReader;
import java.util.logging.Logger;

import static android.app.Activity.RESULT_OK;

public class TranslateFragment extends Fragment {

    ImageButton btn;
    EditText yourText;
    TextView transText;

    private static final int REQUEST_CODE_SPEECH_INPUT = 1000;

    public TranslateFragment() {
        // Required empty public constructor
    }

    public static TranslateFragment getNewInstance() {
        TranslateFragment fragment = new TranslateFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_translate, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        yourText = view.findViewById(R.id.text);
        btn = view.findViewById(R.id.voice);
        transText = view.findViewById(R.id.translateApi);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                speak();
            }
        });

    }

    private void speak() {
        //intent to show speech to text dialog
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
                RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT,"Hi speak something");

        //start intent
        try {
            //show dialog
            startActivityForResult(intent, REQUEST_CODE_SPEECH_INPUT);
        } catch (Exception e) {

        }
    }

    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode) {
            case REQUEST_CODE_SPEECH_INPUT:{
                if (resultCode == RESULT_OK && null!=data) {
                    //get text array from voice intent
                    ArrayList<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    String value = result.get(0);
                    Logger.getLogger(value + "/n");
                    yourText.setText(value);
                    String translateText = "";
//                    try {
//                        translateText = translate(value);
//                        System.out.print(translateText);
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                    }
//                    transText.setText(translateText);
                }
                break;
            }
        }
    }

    private String translate(String value) throws IOException{
        String urlStr = "https://script.google.com/macros/s/AKfycbxVEjRUFFv_S84qruure2EpJK7wpMJZsHS1ZG0GqOUsJNPC7Tkl/exec" +
                "?q=" + URLEncoder.encode(value, "UTF-8") +
                "&target=" + "vi" +
                "&source=" + "en";
        URL url = new URL(urlStr);
        StringBuilder response = new StringBuilder();
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestProperty("User-Agent", "Mozilla/5.0");
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        while ((inputLine = in.readLine()) != null){
            response.append(inputLine);
        }
        System.out.print(response.toString());
        in.close();
        return response.toString();
    }

}
