Cấu trúc thư mục project 
    - src/assets: ảnh, font.
    - components: Các custom components 
    - screens: các màn hình (đặt tên: [Tên màn hình]Screen. Ví dụ: HomeScreen.js )
    - themes: style cho các màn hình, các custom component
        + Mỗi màn hình có 1 Thư mục  (đặt tên: Style[Tên màn hình]Screen. Ví dụ: StyleHomeScreen.js )
        + 1 Thư mục có thể gồm style cho header, style cho màn hình, hay style cho các components khác bên trong (ví StyleHeader, StyleMain, StyleButtonSetting)
    - utils: hằng số, Mã màu thống nhất,... (ví dụ: const GLOBAL = require("../utils/Globals"); => GLOBAL.ABC.XYZ)