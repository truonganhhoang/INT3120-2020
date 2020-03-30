package com.example.dictbox;

public class DB {
    public static String[] getData(int id) {
        if (id == R.id.action_eng_vi) {
            return getEngVn();
        } else if (id == R.id.action_vi_eng) {
            return getVnEng();
        }
        return new String[0];
    }

    public static String[] getEngVn() {
        String[] source = new String[] {
                "A",
                "A level",
                "A, D",
                "A, b",
                "A-bomb",
                "A-tree",
                "A-OK",
                "A-road",
                "A-rabbit",
        };
        return source;
    }

    public static String[] getVnEng() {
        String[] source = new String[] {
                "một",
                "mức độ",
                "A, D",
                "A, b",
                "A-bomb",
                "cây",
                "được",
                "con đường",
                "con thỏ",
        };
        return source;
    }
}
