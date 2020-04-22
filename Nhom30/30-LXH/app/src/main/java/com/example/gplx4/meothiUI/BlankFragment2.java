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

public class BlankFragment2 extends Fragment {
    private RecyclerView recyclerView ;
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
        View view =inflater.inflate(R.layout.fragment_blank,container,false);
        RecyclerView recyclerView = view.findViewById(R.id.recyclerView1);
        recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
        tricks = new ArrayList<>();
        tricks.add(new Meothi("1. Điều đầu tiên và có bản nhất đó là bạn phải biết đi xe máy","Việc phần thực hành trượt nhiều nhất một phần nguyên ngân là do các bạn chưa biết đi xe máy. Vậy nếu bạn muốn thi đỗ thì đầu tiên bạn phải biết đi xe cái đã."));
        tricks.add(new Meothi("2. Tập trước vòng số 8 ở nhà",
                "Phần thi thực hành trượt nhiều nhất là ở phần thi vòng số 8. Do đó, việc bạn đã biết đi xe máy thành thạo nhưng chưa tập qua vòng số 8 thì cũng rất dễ bị trượt. Bạn nên tập qua vòng số 8 càng nhiều lần càng tốt. Ít nhất là lúc đi xe vào vòng số 8 không còn cảm thấy loạng choạng.",
                "R.drawable.vongso8",false));
        tricks.add(new Meothi("3. Hôm thi lên sân thi thật sớm","Tại sao chúng tôi lại khuyên bạn như vậy? Bởi vì xe của bạn thì bạn quen với nó, bạn đi rất ngon lành. Nhưng xe của sân thi thì khác nhiều đấy, nếu bạn không đến sớm để làm quen với nó thì cũng rất dễ trượt. Hơn nữa, buổi thi thường sẽ có rất đông người. Nếu bạn đến sớm thì không phải chờ lâu mới được tập xe. Còn nếu đến muộn thì khả năng phải xếp hàng dài dài mới đến lượt mình.\n"));
        tricks.add(new Meothi("4. Cách đi để không bị chạm vạch", "Mẹo thi thực hành bằng lái xe A1 đó là hãy nhìn thật kỹ người đàn ông trong video này đi xe. Anh ta đi xe vào từ mép ngoài bên trái, bởi vì như thế thì bánh sau mới không bị đè lên vạch. Nếu bạn đi vào từ mép ngoài bên phải thì nhìn bánh trước vào rất ngon lành, nhưng rất tiếc bánh sau sẽ bị đè lên vạch ngay. Tương tự lúc ra khỏi vòng số 8 cũng như vậy. Bạn phải cho xe ra từ mép ngoài bên trái, nếu không bánh sau của xe cũng sẽ đè lên vạch.\n \n" +
                "Bạn không cần phải đi quá nhanh như người đàn ông này. Hãy đi chậm chậm vừa phải, đừng để ngã xe hay chạm vạch là được.\n \n" +
                "Lưu ý: Lúc thi thực hành bạn nên để xe ở số 3 mà đi. Bởi Vì số 4 thì có thể sẽ hơi yếu, nhưng số 1,2 thì sẽ bị giật mạnh. Phần đường gồ ghề bạn nên để số 3 đi và nên đi chậm chậm vừa phải nếu không muốn bay luôn cả người và xe ra ngoài.\n", true));
        Adapter adapter = new Adapter(tricks);
        recyclerView.setAdapter(adapter);
        return view;
    }

}
