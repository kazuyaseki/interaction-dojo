### How to Run

* Go to the direcotry
* `python3 -m http.server port#`

local file から file:// で参照できてしまうのはセキュリティ的によろしくないので使えないらしい。
https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker
なのでローカルでサーバー立ち上げて使うようにする。

もしくは Chrome の場合

* --allow-file-access-from-files フラグ セットを指定して Chrome を実行

すればいけるらしい。推奨はされないが。

### Learning Material

* https://www.html5rocks.com/ja/tutorials/workers/basics/
* https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja
* https://developers.google.com/web/fundamentals/codelabs/push-notifications/?hl=ja
