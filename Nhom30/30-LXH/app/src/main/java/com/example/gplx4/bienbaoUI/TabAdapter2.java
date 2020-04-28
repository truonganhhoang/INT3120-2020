package com.example.gplx4.bienbaoUI;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentStatePagerAdapter;

public class TabAdapter2 extends FragmentStatePagerAdapter {

    int mNumofTabs;
    public TabAdapter2(@NonNull FragmentManager fm, int mNumofTabs) {
        super(fm);
        this.mNumofTabs = mNumofTabs;
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        switch (position){
            case 0:
                BienbaoFragment1 bienbaoFragment1 = new BienbaoFragment1();
                return bienbaoFragment1;
            case 1:
                BienbaoFragment2 bienbaoFragment2 = new BienbaoFragment2();
                return bienbaoFragment2;
            case 2:
                BienbaoFragment3 bienbaoFragment3 = new BienbaoFragment3();
                return bienbaoFragment3;
            case 3:
                BienbaoFragment4 bienbaoFragment4 = new BienbaoFragment4();
                return bienbaoFragment4;
            case 4:
                BienbaoFragment5 bienbaoFragment5 = new BienbaoFragment5();
                return bienbaoFragment5;
            case 5:
                BienbaoFragment6 bienbaoFragment6 = new BienbaoFragment6();
                return bienbaoFragment6;
            default:
                return null;
        }

    }

    @Override
    public int getCount() {
        return mNumofTabs;
    }
}
