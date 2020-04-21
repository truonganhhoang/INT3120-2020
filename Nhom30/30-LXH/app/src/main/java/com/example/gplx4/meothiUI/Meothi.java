package com.example.gplx4.meothiUI;

import java.util.ArrayList;
import java.util.List;

public class Meothi {
    String title;
    String content;
    String imageResource;
    boolean linkBtn;

    public Meothi(String title, String content, String imageResource, boolean linkBtn) {
        this.title = title;
        this.content = content;
        this.imageResource = imageResource;
        this.linkBtn = linkBtn;
    }

    public Meothi(String title,String content){
        this.title = title;
        this.content = content;
    }

    public Meothi(String title,String content, boolean linkBtn){
        this.title = title;
        this.content = content;
        this.linkBtn = linkBtn;
    }

    private List<Meothi> tricks;

    private void initData(){
        tricks = new ArrayList<>();
        tricks.add(new Meothi("Trong phần tử","Hello abcde"));
        tricks.add(new Meothi("Trong phần tử","Hello abcde"));
        tricks.add(new Meothi("Trong phần tử","Hello abcde"));
    }
}
