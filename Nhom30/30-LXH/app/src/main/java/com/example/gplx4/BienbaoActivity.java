package com.example.gplx4;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;

import com.example.gplx4.bienbaoUI.TabAdapter2;
import com.google.android.material.tabs.TabLayout;

public class BienbaoActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().setElevation(0);
        setContentView(R.layout.activity_bienbao);
        TabLayout tabLayout = (TabLayout) findViewById(R.id.tab_layout_2);
        tabLayout.addTab(tabLayout.newTab().setText("Biển báo cấm"));
        tabLayout.addTab(tabLayout.newTab().setText("Biển báo nguy hiểm"));
        tabLayout.addTab(tabLayout.newTab().setText("Biển báo hiệu lệnh"));
        tabLayout.addTab(tabLayout.newTab().setText("Biển báo chỉ dẫn"));
        tabLayout.addTab(tabLayout.newTab().setText("Biển báo phụ"));
        tabLayout.addTab(tabLayout.newTab().setText("Vạch kẻ đường"));
//        tabLayout.setTabGravity(TabLayout.GRAVITY_CENTER);
        final ViewPager viewPager = (ViewPager) findViewById(R.id.view_pager_2);
        TabAdapter2 tabAdapter2 = new TabAdapter2(getSupportFragmentManager(),tabLayout.getTabCount());
        viewPager.setAdapter(tabAdapter2);
        viewPager.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(tabLayout));
        tabLayout.setOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                viewPager.setCurrentItem(tab.getPosition());
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {

            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });
    }
}
