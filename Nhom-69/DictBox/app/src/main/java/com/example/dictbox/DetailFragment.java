package com.example.dictbox;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;


public class DetailFragment extends Fragment {

    private  String value = "";
    private TextView tvWord;
    private ImageButton btnBookmark, btnVolume;
    private WebView tvWordTranslate;
    private  DBHelper mDBHelper;
    private  int mDicType;

    public DetailFragment() {
        // Required empty public constructor
    }

    public static DetailFragment getNewInstance(String value, DBHelper dbHelper, int dicType){
        DetailFragment fragment = new DetailFragment();
        fragment.value = value;
        fragment.mDBHelper = dbHelper;
        fragment.mDicType = dicType;
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
        return inflater.inflate(R.layout.fragment_detail, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        tvWord = view.findViewById(R.id.tvWord);
        tvWordTranslate = view.findViewById(R.id.tvWordTranslate);
        btnBookmark = view.findViewById(R.id.btnBookmark);
        btnVolume = view.findViewById(R.id.btnVolume);

        final Word word = mDBHelper.getWord(value, mDicType);
        tvWord.setText(word.key);
        tvWordTranslate.loadDataWithBaseURL(null,  word.value, "text/html", "utf-8", null);

        Word bookmarkWord = mDBHelper.getWordFromBookMark(value);
        int isMark = bookmarkWord == null? 0: 1;

        btnBookmark.setTag(isMark);

        int icon = bookmarkWord == null ? R.drawable.ic_bookmark_border : R.drawable.ic_bookmark;
        btnBookmark.setImageResource(icon);

        btnBookmark.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            int i = (int)btnBookmark.getTag();
            if(i == 0){
                btnBookmark.setImageResource(R.drawable.ic_bookmark);
                btnBookmark.setTag(1);
                mDBHelper.addBookMark(word);
            }else if(i == 1){
                btnBookmark.setImageResource(R.drawable.ic_bookmark_border);
                btnBookmark.setTag(0);
                mDBHelper.removeBookMark(word);
            }
            }
        });
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
