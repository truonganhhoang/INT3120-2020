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
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import java.util.Arrays;

public class DictionaryFragment extends Fragment {

    private String value = "Hello";
    private  FragmentListener listener;

    public DictionaryFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_dictionary, container, false);
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
        ListView dictList = view.findViewById(R.id.dictionaryList);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getContext(), android.R.layout.simple_list_item_1, getListOfWords());
        dictList.setAdapter(adapter);
        dictList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if(listener != null){
                    listener.onItemClick(getListOfWords()[position]);
                }
            }
        });
    }

    String[] getListOfWords(){
        String[] source = new String[]{
             "a"
             ,"aa"
             ,"aaa"
             ,"ash"
            ,"a"
            ,"aa"
            ,"aaa"
            ,"ash"
            ,"a"
            ,"aa"
            ,"aaa"
            ,"ash"
            ,"a"
            ,"aa"
            ,"aaa"
            ,"ash"
            ,"a"
            ,"aa"
            ,"aaa"
            ,"ash"
        };

        return source;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);

    }

    @Override
    public void onDetach() {
        super.onDetach();
    }

    public  void setOnFragmentListener(FragmentListener listener){
        this.listener = listener;
    }
}
