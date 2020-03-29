# React 環境建置

## 安裝 Node 
* 如果已經安裝 Node ，請往下個段落檢查 Node 以及 npm 版本
* 至 https://nodejs.org/zh-tw/download/ 網站下載 LTS 版本![](https://i.imgur.com/AMmmuqi.png)
    * 選擇 LTS 底下的 Windows 安裝包
    * 執行安裝檔案，一直按 Next 就好
    * 遇到這個不需要勾選，繼續 Next
    ![](https://i.imgur.com/MIXS2rr.png)
    
### 檢查 Node 及 npm 版本
打開 Command Line (命令提示字元)，輸入
```
node -v
```
npm 也是一樣，輸入指令
```
npm -v
```
![](https://i.imgur.com/b9jZUtS.png)
成功會顯示版本，我們這個教學版本需要：
==1. Node >= 8.0==
==2. npm >= 5.6==

### 如果版本不夠

直接下載新版本 Node，覆蓋以前 node 安裝的路徑即可，新版本的 Node 會搭配新版的 npm ，因此不需再次更新 npm

## 安裝 Git
* 至 https://git-scm.com/ 下載 Git
* 打開安裝檔案，基本上一直按 Next
    * ==注意== 路徑選擇預設路徑 `C:\Program Files\Git` 否則會有錯誤
    * ![](https://i.imgur.com/4U2VrlY.png)

## 設定 Node 及 npm 的 Proxy
* 在自己的 user 資料夾，新增 `.gitconfig` 檔案
* 用記事本開啟，貼上以下內容
```
(看下自己的電腦)
```
* 同樣在 user 資料夾，新增 `.npmrc` 檔案
* 用記事本開啟，貼上以下內容
```
(看下自己的電腦)
```
## 安裝 VSCode
* 至 https://code.visualstudio.com/download 下載 VSCode
* 一直按下一步
* 注意下圖，其他部分全選
![](https://i.imgur.com/H4mOBbq.png)

## 建立 React 專案
* 到 https://github.com/imjerry1995/react-workshop 下載 React 專案 （Download ZIP）
* ![](https://i.imgur.com/EoFHLIw.png)

    * 如果會下指令的可以用指令方式
    ```
    git clone https://github.com/imjerry1995/react-workshop.git
    ```
* 接著對著剛剛下載好並解壓縮出來的`my-app`資料夾，右鍵選擇 `Open with Code`
![](https://i.imgur.com/DhopdtY.png)
* VSCode 打開之後，同時按下 Ctrl+\` ，會出現終端機
![](https://i.imgur.com/XlZgj6j.png)
    * 或者是最上方選單 Terminal > New Terminal
    ![](https://i.imgur.com/Mm47GSy.png)
* 在終端機的下拉式選單，選擇 `Select Default Shell`
![](https://i.imgur.com/ehqtTvv.png)
* 畫面上方會跳出三個，選擇 `Git Bash`
![](https://i.imgur.com/zRpFzH3.png)

* 在 VSCode 的終端機上下
    ```
    npm install
    ```
* 跑好之後，接著下
    ```
    npm start
    ```
* 接著瀏覽器自動開啟 localhost:3000 ，出現以下畫面就環境建置就大功告成
![](https://i.imgur.com/YdKFghC.png)


## Git 指令
### 下載專案
```
git clone <>
```

### 切換分支（步驟）
```
git checkout 分支名稱
```
* 若程式打錯或跟不上，可以切到目前階段的分支


## 分支步驟內容
1. [*step-0*](https://github.com/imjerry1995/react-workshop/tree/step-0) 新的 Project
2. [*step-1*](https://github.com/imjerry1995/react-workshop/tree/step-1) 開始做奶茶 List
3. [*step-2*](https://github.com/imjerry1995/react-workshop/tree/step-2) 奶茶 List 完成，開始元件化奶茶List
4. [*step-3-homework*](https://github.com/imjerry1995/react-workshop/tree/step-3-homework) 奶茶 List 元件化完成，開始元件化其他元件
5. [*step-3-homework-solution*](https://github.com/imjerry1995/react-workshop/tree/step-3-homework-solution) 畫面元件化完成
6. [*step-4*](https://github.com/imjerry1995/react-workshop/tree/step-4) 畫面元件化完成，開始調整 Menu 並加入 LocalStorage
7. [*step-5*](https://github.com/imjerry1995/react-workshop/tree/step-5) 調整 Menu 並加入 LocalStorage 完成，加入明細頁面
8. [*step-6*](https://github.com/imjerry1995/react-workshop/tree/step-6) 明細頁規劃完成，開始加入 Router，並微調程式
9. [*step-7*](https://github.com/imjerry1995/react-workshop/tree/step-7) Router加入完成，開始加入生命週期概念（串接資料）


----
## 若要建立空的 React 專案
* 在 VSCode 的終端機下以下指令建立 React 專案
```
npx create-react-app my-app
```