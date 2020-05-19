package com.example.gplx4.bienbaoUI;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;

@Database(entities = {BienbaoEntity.class},version = 1,exportSchema = false)
public abstract class BienbaoRoomDatabase extends RoomDatabase {
    public abstract BienbaoDAO bienbaoDAO();
    private static BienbaoRoomDatabase INSTANCE;
    public static BienbaoRoomDatabase getDatabase(final Context context){
        if(INSTANCE == null){
            synchronized (BienbaoRoomDatabase.class) {
                if(INSTANCE == null){
                    INSTANCE = Room.databaseBuilder(context.getApplicationContext(),BienbaoRoomDatabase.class,"bienbao_database")
                            .fallbackToDestructiveMigration()
                            .build();
                }
            }
        }
        return INSTANCE;
    }
}
