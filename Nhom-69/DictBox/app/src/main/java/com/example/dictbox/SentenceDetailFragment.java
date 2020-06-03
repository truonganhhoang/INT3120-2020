package com.example.dictbox;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class SentenceDetailFragment extends Fragment {
    private String value = "";
    private WebView tvSentence;
    private DBHelper mDBHelper;

    public SentenceDetailFragment() {
        // Required empty public constructor
    }

    public static SentenceDetailFragment getNewInstance(String value, DBHelper dbHelper) {
        SentenceDetailFragment fragment = new SentenceDetailFragment();
        fragment.value = value;
        fragment.mDBHelper = dbHelper;
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
        return inflater.inflate(R.layout.fragment_sentence_detail, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        tvSentence = view.findViewById(R.id.tvSentence);

        final Word word = mDBHelper.getSentence(value);
        tvSentence.loadDataWithBaseURL(null, word.value, "text/html", "utf-8", null);

    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
    }

    @Override
    public void onDetach() {
        super.onDetach();
    }
}
