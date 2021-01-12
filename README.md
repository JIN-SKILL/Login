# 登入頁面
使用 Express.js + mongoDB 建置的登入頁面，用於練習資料驗證。

![Login](https://raw.githubusercontent.com/JIN-SKILL/Example_Image/main/Login.png)


## 使用工具
+ Node.js 14.15.3
+ Express 4.17.1
+ Express-Handlebars: 5.2.0
+ body-parser 1.19.0
+ mongoose 5.11.9
+ nodemon 2.0.6
+ Bootstrap 5.0.0
+ popper 2.5.4

## 安裝
1. 開啟終端機 (Terminal) 並前往安裝路徑的資料夾內輸入指令
    ```
    git clone https://github.com/JIN-SKILL/Login.git
    ```
2. 進入專案資料夾
    ```
    cd Login
    ```
3. 安裝所需套件
	```
    npm i
    ```
4. 匯入測試資料
	```
    npm run seed
    ```
4. 終端機 (Terminal) 顯示以下內容，即可按兩次 Ctrl+C 跳回控制介面
	```
    mongoDB connected.
    Completed seed loading.
    ```
6. 啟用 localhost 伺服器
	```
    npm run dev
    ```
7. 終端機 (Terminal) 顯示以下內容，即可在瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 使用網站
	```
    The server is listening on http://localhost:3000
    mongoDB connected.
    ```
