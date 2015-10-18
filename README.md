# Angular + Express Blog Seed

以 Node、Express 及 Angular 搭建的簡易部落格，前後端合作用 HTTP 模擬增刪改查（CRUD）操作，實現了 RESTful 架構。

樣式方面使用了 Bootstrap 的 [Flatly](https://bootswatch.com/flatly/) 主題。

正如描述，這是一個種子工程。日後可能會新增 MongoDB 貯存資料、Angular 表單驗證、Gulp 生產工作流等——也可能在其他工程中使用；亦即此工程不一定會持續更新。

它屬於一個單頁應用（SPA），毋須跳轉即可造訪全部視圖功能。

## 安裝嚮導

1. 首先確保你的作業系統中已全局安裝了 [Node](http://nodejs.org/)。
2. 在工程下執行 `npm install` 命令。
3. 上步安裝完依賴後，執行 `node app.js` 命令。
4. 在瀏覽器中造訪 `localhost:8080` 即可。

## 技術詳情

### 構建工具

現時暫未有使用構建工具，但會把開發／生產環境下的 [Gulp](http://gulpjs.com/) 的整合提上日程。

### 伺服端架構

#### Node.js + Express

這兩者提供了快速、簡單而廉價花銷的 RESTful 路由導向，並擁有極佳的可塑性和擴展性。

#### 數據庫

現時採用硬編碼的僞數據，但會把 [MongoDB](https://github.com/mattpetrie/React-Node-Project-Seed/blob/master/www.mongodb.org) 的整合提上日程。

### 前端架構

1. AngularJS 編寫，實現了路由、動態視圖、數據綁定、Ajax CRUD 等操作。
2. Jade 視圖模板。但鑑於本項目規模，使用 Jade 略顯 overkill。本人傾向於無論何時都採用 Jade 而非語法成迷的 EJS。
