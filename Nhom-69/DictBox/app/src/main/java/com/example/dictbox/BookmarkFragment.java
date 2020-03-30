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
import android.widget.Button;
import android.widget.ListView;
import android.widget.Toast;


public class BookmarkFragment extends Fragment {

    private FragmentListener listener;

    public BookmarkFragment() {

    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_bookmark, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
//        Button myButton = (Button)view.findViewById(R.id.myBtn);
//        myButton.setOnClickListener(new View.OnClickListener(){
//            @Override
//            public void onClick(View v) {
//                if (listener!=null){
//                    listener.onItemClick(value);
//                }
//            }
//        });

        ListView bookmarkList = (ListView) view.findViewById(R.id.bookmarkList);
        final BookmarkAdapter adapter = new BookmarkAdapter(getActivity(), getListOfWords());
        bookmarkList.setAdapter(adapter);

        adapter.setOnItemClick(new ListItemListener() {
            @Override
            public void onItemClick(int position) {
                if (listener != null) {
                    listener.onItemClick(String.valueOf(adapter.getItem(position)));
                }
            }
        });

        adapter.setOnItemDeleteClick(new ListItemListener() {
            @Override
            public void onItemClick(int position) {
                adapter.removeItem(position);
                adapter.notifyDataSetChanged();
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

    String[] getListOfWords() {
        String[] source = new String[]{
                "a"
                , "aa"
                , "aaa"
                , "ash"
                , "a"
                , "aa"
                , "aaa"
                , "ash"
                , "a"
                , "aa"
                , "aaa"
                , "ash"
                , "a"
                , "aa"
                , "aaa"
                , "ash"
                , "a"
                , "aa"
                , "aaa"
                , "ash"
        };

        return source;
    }
}
