package com.example.dictbox;

import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;

public class DBHelper extends SQLiteOpenHelper {

    private Context context;
    public static final String DATABASE_NAME = "dict_hh.db";
    public static final int DATABASE_VERSION = 1;

    private String DATABASE_LOCATION = "";
    private String DATABASE_FULL_PATH = "";

    private final String TBL_AV = "av";
    private final String TBL_BOOKMARK = "bookmark";
    private final String TBL_HISTORY = "history";
    private final String TBL_SENTENCES = "sentences";
    private final String COL_KEY = "key";
    private final String COL_VALUE = "value";

    public SQLiteDatabase mDB;

    public DBHelper(Context context) throws IOException {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        this.context = context;

        DATABASE_LOCATION = "data/data/" + context.getPackageName() + "/database";
        DATABASE_FULL_PATH = DATABASE_LOCATION + DATABASE_NAME;

        if (!isExistingDB()) {
            try {
                File dbLocation = new File(DATABASE_LOCATION);
                dbLocation.mkdirs();

                extractAssetToDatabaseDirectory(DATABASE_NAME);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        mDB = SQLiteDatabase.openOrCreateDatabase(DATABASE_FULL_PATH, null);
    }

    public void extractAssetToDatabaseDirectory(String fileName) throws IOException {
        int length;
        InputStream sourceDatabase = this.context.getAssets().open(fileName);
        File destinationPath = new File(DATABASE_FULL_PATH);
        OutputStream destination = new FileOutputStream(destinationPath);

        byte[] buffer = new byte[4096];
        while ((length = sourceDatabase.read(buffer)) > 0) {
            destination.write(buffer, 0, length);
        }

        sourceDatabase.close();
        destination.flush();
        destination.close();
    }

    boolean isExistingDB() {
        File file = new File(DATABASE_FULL_PATH);
        return file.exists();
    }

    @Override
    public void onCreate(SQLiteDatabase db) {


    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }

    public ArrayList<String> getWord() {
        String q = "SELECT [key], [value] FROM " + TBL_AV;
        Cursor result = mDB.rawQuery(q, null);

        ArrayList<String> source = new ArrayList<>();
        while ((result.moveToNext())) {
            source.add(result.getString(result.getColumnIndex(COL_KEY)));

        }
        return source;
    }

    public Word getWord(String key) {
        String q = "SELECT [key], [value] FROM " + TBL_AV + " WHERE upper([key]) = upper(?)";
        Cursor result = mDB.rawQuery(q, new String[]{key});

        Word word = new Word();

        while ((result.moveToNext())) {
            word.key = result.getString(result.getColumnIndex(COL_KEY));
            word.value = result.getString(result.getColumnIndex(COL_VALUE));
        }

        return word;
    }

    public Word getSentence(String key) {
        String q = "SELECT [key], [value] FROM " + TBL_SENTENCES + " WHERE upper([key]) = upper(?)";
        Cursor result = mDB.rawQuery(q, new String[]{key});

        Word word = new Word();

        while ((result.moveToNext())) {
            word.key = result.getString(result.getColumnIndex(COL_KEY));
            word.value = result.getString(result.getColumnIndex(COL_VALUE));
        }

        return word;
    }

    public void addBookMark(Word word) {
        try {
            String q = "INSERT INTO " + TBL_BOOKMARK + " ([" + COL_KEY + "],[" + COL_VALUE + "]) VALUES (?, ?);";
            mDB.execSQL(q, new Object[]{word.key, word.value});

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void addHistory(Word word){
        try{
            String q = "INSERT INTO " + TBL_HISTORY + " ([" + COL_KEY + "],[" + COL_VALUE + "]) VALUES (?, ?);";
            mDB.execSQL(q, new Object[]{word.key, word.value});
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    public void removeBookMark(Word word) {
        try {
            String q = "DELETE FROM " + TBL_BOOKMARK + " WHERE upper([" + COL_KEY + "]) = upper(?) AND [" + COL_VALUE + "] = ?;";
            mDB.execSQL(q, new Object[]{word.key, word.value});

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void removeBookMark(String key) {
        try {
            String q = "DELETE FROM " + TBL_BOOKMARK + " WHERE upper([" + COL_KEY + "]) = upper(?)";
            mDB.execSQL(q, new Object[]{key});

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

//    public String getTableName(int dicType) {
//        String tableName = "";
//        if (dicType == R.id.action_eng_vi) {
//            tableName = TBL_AV;
//        } else if (dicType == R.id.action_vi_eng) {
//            tableName = TBL_VA;
//        }
//        return tableName;
//    }

    public ArrayList<String> getAllWordFromBookMark() {
        String q = "SELECT * FROM " + TBL_BOOKMARK + " ORDER BY [date] DESC;";
        Cursor result = mDB.rawQuery(q, null);

        Word word = new Word();

        ArrayList<String> source = new ArrayList<>();

        while ((result.moveToNext())) {
            source.add(result.getString(result.getColumnIndex(COL_KEY)));
        }

        return source;
    }

    public ArrayList<String> getAllWordFromHistory() {
        String q = "SELECT * FROM " + TBL_HISTORY + " ORDER BY [date] DESC;";
        Cursor result = mDB.rawQuery(q, null);

        Word word = new Word();

        ArrayList<String> source = new ArrayList<>();

        while ((result.moveToNext())) {
            source.add(result.getString(result.getColumnIndex(COL_KEY)));
        }

        return source;
    }

    public ArrayList<String> getAllFromSentences() {
        String q = "SELECT * FROM " + TBL_SENTENCES + " ORDER BY [id] DESC;";
        Cursor result = mDB.rawQuery(q, null);

        Word word = new Word();

        ArrayList<String> source = new ArrayList<>();

        while ((result.moveToNext())) {
            source.add(result.getString(result.getColumnIndex(COL_KEY)));
        }

        return source;
    }

    public boolean isWordMark(Word word) {
        String q = "SELECT * FROM " + TBL_BOOKMARK + " WHERE upper([key]) = upper (?) AND [value] = ?";
        Cursor result = mDB.rawQuery(q, new String[]{word.key, word.value});

        return result.getCount() > 0;
    }

    public Word getWordFromBookMark(String key) {
        String q = "SELECT * FROM " + TBL_BOOKMARK + " WHERE upper([key]) = upper (?)";
        Cursor result = mDB.rawQuery(q, new String[]{key});

        Word word = null;
        while ((result.moveToNext())) {
            word = new Word();
            word.key = result.getString(result.getColumnIndex(COL_KEY));
            word.value = result.getString(result.getColumnIndex(COL_VALUE));
        }
        return word;
    }

    public Word getWordFromHistory(String key) {
        String q = "SELECT * FROM " + TBL_HISTORY + " WHERE upper([key]) = upper (?)";
        Cursor result = mDB.rawQuery(q, new String[]{key});

        Word word = null;
        while ((result.moveToNext())) {
            word = new Word();
            word.key = result.getString(result.getColumnIndex(COL_KEY));
            word.value = result.getString(result.getColumnIndex(COL_VALUE));
        }
        return word;
    }

    public void clearBookmark() {
        try {
            String q = "DELETE FROM " + TBL_BOOKMARK;
            mDB.execSQL(q);

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
