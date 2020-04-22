package com.example.gplx4.bienbaoUI;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "bienbao")
public class BienbaoEntity {
    @PrimaryKey(autoGenerate = true)
    @NonNull
    private Long id;
    private int img_id;
    private String title;
    private String description;

    public BienbaoEntity(String title, String description) {
//        this.img_id = img_id;
        this.title = title;
        this.description = description;
    }

    public void setId(@NonNull Long id) {
        this.id = id;
    }

    public void setImg_id(int img_id) {
        this.img_id = img_id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @NonNull
    public Long getId() {
        return id;
    }

    public int getImg_id() {
        return img_id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}
