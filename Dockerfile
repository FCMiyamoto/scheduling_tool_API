FROM node:16

#ディレクトリの作成
WORKDIR /usr/src/app

#全ファイルを配置
COPY ./ /usr/src/app

#依存関係のインストール
RUN npm install

#公開？
EXPOSE 3001

#?
CMD ["npm","start"]


