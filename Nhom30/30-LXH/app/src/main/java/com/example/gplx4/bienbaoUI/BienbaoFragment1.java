package com.example.gplx4.bienbaoUI;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.room.Database;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.gplx4.R;


import java.util.ArrayList;
import java.util.List;

///**
// * A simple {@link Fragment} subclass.
// * Use the {@link BienbaoFragment1#newInstance} factory method to
// * create an instance of this fragment.
// */
public class BienbaoFragment1 extends Fragment {
    private RecyclerView recyclerView;
//    // TODO: Rename parameter arguments, choose names that match
//    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
//    private static final String ARG_PARAM1 = "param1";
//    private static final String ARG_PARAM2 = "param2";
//
//    // TODO: Rename and change types of parameters
//    private String mParam1;
//    private String mParam2;
//
//    public BienbaoFragment1() {
//        // Required empty public constructor
//    }
//
//    /**
//     * Use this factory method to create a new instance of
//     * this fragment using the provided parameters.
//     *
//     * @param param1 Parameter 1.
//     * @param param2 Parameter 2.
//     * @return A new instance of fragment BienbaoFragment1.
//     */
//    // TODO: Rename and change types and number of parameters
//    public static BienbaoFragment1 newInstance(String param1, String param2) {
//        BienbaoFragment1 fragment = new BienbaoFragment1();
//        Bundle args = new Bundle();
//        args.putString(ARG_PARAM1, param1);
//        args.putString(ARG_PARAM2, param2);
//        fragment.setArguments(args);
//        return fragment;
//    }
//
//    @Override
//    public void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        if (getArguments() != null) {
//            mParam1 = getArguments().getString(ARG_PARAM1);
//            mParam2 = getArguments().getString(ARG_PARAM2);
//        }
//    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_bienbao1,container,false);
        recyclerView = view.findViewById(R.id.recyclerView1);
        recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
//        BienbaoRoomDatabase bienbaoRoomDatabase = BienbaoRoomDatabase.getDatabase(this.getContext());
//        BienbaoEntity bienbao = new BienbaoEntity( "Đường cấm", "Báo đường cấm tất cả các loại phương tiện (cơ giới và thô sơ) đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định");
//        bienbaoRoomDatabase.bienbaoDAO().insert(bienbao);

        return view;
    }
}
