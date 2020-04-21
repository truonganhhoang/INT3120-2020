package com.example.gplx4.bienbaoUI;

import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;

import java.util.List;

@Dao
public interface BienbaoDAO {
    @Insert
    void insert(BienbaoEntity bienbao);

    @Query("SELECT * FROM bienbao")
    List<BienbaoEntity> getAllBienbao();
}
