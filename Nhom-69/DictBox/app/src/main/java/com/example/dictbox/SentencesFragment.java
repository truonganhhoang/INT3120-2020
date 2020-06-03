package com.example.dictbox;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;

import java.util.ArrayList;

public class SentencesFragment extends Fragment {
    private FragmentListener listener;
    private DBHelper mDBHelper;
    private SentencesAdapter adapter;

    public static SentencesFragment getNewInstance(DBHelper dbHelper) {
        SentencesFragment fragment = new SentencesFragment();
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
        return inflater.inflate(R.layout.fragment_sentences, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        setHasOptionsMenu(true);

        ListView sentenceList = (ListView) view.findViewById(R.id.sentenceList);
        adapter = new SentencesAdapter(getActivity(), mDBHelper.getAllFromSentences());

        sentenceList.setAdapter(adapter);

        adapter.setOnItemClick(new ListItemListener() {
            @Override
            public void onItemClick(int position) {
                if (listener != null) {
                    listener.onItemClick(String.valueOf(adapter.getItem(position)));
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

    public void setOnFragmentListener(FragmentListener listener) {
        this.listener = listener;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        return super.onOptionsItemSelected(item);
    }
}
