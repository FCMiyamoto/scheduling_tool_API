FROM node:16

#ディレクトリの作成
WORKDIR /usr/src/app

#jsファイル、package.jsonを配置
# COPY ["package.json","package-lock.json" ,"./"];
COPY ./backend/package.json /usr/src/app
COPY ./backend/index.js /usr/src/app

#依存関係のインストール
RUN npm install

#公開？
EXPOSE 3001

#?
CMD ["node", "index.js"] 


