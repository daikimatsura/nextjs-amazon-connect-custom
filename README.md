# このリポジトリについて

本リポジトリはNext.jsアプリケーションにAmazon Connectの標準CCPを埋め込んだアプリです。
<br/>
コードについての解説は[こちらのブログ](https://www.geekfeed.co.jp/geekblog/nextjs-amazon-connect/)をご覧ください。

# Usage

## アプリケーションのセットアップ

1. このリポジトリをクローンします。
   ```
   git clone https://github.com/daikimatsura/nextjs-amazon-connect-custom.git
   ```
2. プロジェクトディレクトリに移動します。
   ```
   cd nextjs-amazon-connect
   ```
3. 必要なパッケージをインストールします。
   ```
   npm install
   ```
4. 環境変数を設定します。`.env.local` ファイルを作成し、以下のように記述します。
   ```
   NEXT_PUBLIC_AMAZON_CONNECT_INSTANCE_NAME="対象のAmazon Connectインスタンス名を入れます"
   ```
5. アプリケーションを起動します。
   ```
   npm run dev
   ```

これで、ローカルでNext.jsアプリケーションが起動し、Amazon ConnectのCCPが組み込まれます。
