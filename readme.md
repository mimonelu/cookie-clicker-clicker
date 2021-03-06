**Gist で [最新版](https://gist.github.com/mimonelu/9499f1357c6d01d2fe6f0bf873f58cb3) を公開しました。**

# Cookie Clicker Clicker

![Cookie Clicker](/catch.png)

## Description

Cookie Clicker で自動的にクリックするブックマークレット。  
チート判定を下されても泣かない人向け。

## Environment

WebKit のみで動作する、と思われる。  
IE とかいう腐ったミルクでは動かない。

## Features

* _BigCookie 自動クリック機能_  
10ms ごとにクリックする…が、速すぎて一部の `click` イベントしか処理されていない模様。  
このあたりは Opera が速いそうですよ。
* _Golden Cookie 自動クリック機能_  
1 秒ごとに Golden Cookie が表示されているか判断し、クリックする。  
…ただし、 Grandma Apocalypth 中は　Golden Cookie = Wrath Cookie (Red Cookie) である点に注意。  
デメリットが怖い場合はコード内のコメントアウト部分を取り除けば、 Wrath Cookie をクリックしなくなる。
* _ON/OFF 機能_  
ブックマークレットを起動するたびに ON/OFF を切り替える。

## Usage

* 新しいブックマークを作る。
* ブックマークの URL に bookmarklet.min.js の中身をコピペする。
* Cookie Clicker 上でブックマークを起動する。

## Etc

コードの圧縮には YUI Compressor を使った。  
<http://refresh-sf.com/yui/>

## Contact

<https://twitter.com/mimonelu>
