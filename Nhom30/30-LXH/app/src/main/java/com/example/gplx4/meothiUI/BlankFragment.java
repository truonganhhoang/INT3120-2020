package com.example.gplx4.meothiUI;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.gplx4.R;

import java.util.ArrayList;
import java.util.List;

public class BlankFragment extends Fragment {
    private RecyclerView recyclerView;
    private List<Meothi> tricks;
//    // TODO: Rename parameter arguments, choose names that match
//    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
//    private static final String ARG_PARAM1 = "param1";
//    private static final String ARG_PARAM2 = "param2";
//
//    // TODO: Rename and change types of parameters
//    private String mParam1;
//    private String mParam2;
//
//    public BlankFragment() {
//        // Required empty public constructor
//    }
//
//    /**
//     * Use this factory method to create a new instance of
//     * this fragment using the provided parameters.
//     *
//     * @param param1 Parameter 1.
//     * @param param2 Parameter 2.
//     * @return A new instance of fragment BlankFragment.
//     */
//    // TODO: Rename and change types and number of parameters
//    public static BlankFragment newInstance(String param1, String param2) {
//        BlankFragment fragment = new BlankFragment();
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
        View view = inflater.inflate(R.layout.fragment_blank, container, false);
        RecyclerView recyclerView = view.findViewById(R.id.recyclerView1);
        recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
        tricks = new ArrayList<>();
        tricks.add(new Meothi("Trong phần khái niệm có những chữ \"Được hiểu như thế nào là đúng\" thì áp dụng", "Vạch - Phổ - Dả - Phần (Chọn đáp án là 1)"
                + "\n \n" + "Ưu - Phương - Làn (Chọn đáp án là 2)"
                + "\n \n" + "Bộ (Chọn đáp án là 1 và 2)"
                + "\n \n" + "Nếu có cả từ PHƯƠNG và BỘ trong câu khái niệm thì tuân theo Phương chọn đáp án là 2."));
        tricks.add(new Meothi("Phương tiện giao thông đường bộ gồm cơ giới và thô sơ thì chọn 1.Phương tiện tham gia giao thông đường bộ gồm cơ giới, thô sơ, xe máy chuyên dùng thì chọn cả 1 và 2",
                "Có 4 nguyên tắc nhường đường: (1) Không có vòng xuyến nhường phải; (2) Có vòng xuyến nhường trái; (3) Nhường đường cho xe ưu tiên, đường chính; (4) Nhường đường cho người đi bộ."));
        tricks.add(new Meothi("Bài nồng độ cồn", "Xe mô tô chọn đáp án có 2 con số là 50 và 0,25. Đối với xe ô tô thì tuyệt đối không được uống rượu bia khi tham gia giao thông."));
        tricks.add(new Meothi("Cảnh sát giang 2 tay chọn ngay ý 1, Giơ tay không quyên chọn ý 2; (Giang 1- giơ 2)", "Bài đường cao tốc: Ra chọn 1 - vào chọn đáp án 1+3 - bảo trì đường cao tốc chọn 3."));
        tricks.add(new Meothi("Trong phần tử", "Hello abcde"));
        tricks.add(new Meothi("Trong phần tử", "Hello abcde"));
        tricks.add(new Meothi("Trong phần tử", "Hello abcde"));
        tricks.add(new Meothi("Trong phần tử", "Hello abcde"));

        Adapter adapter = new Adapter(tricks);
        recyclerView.setAdapter(adapter);
        return view;
    }
}