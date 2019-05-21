# miceroux - 見せる

HTML要素内のAsciiDoc文書をHTMLに変換して「見せる」JavaScriptです。

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-8520104366643143"
     data-ad-slot="6037602309"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Sample

```html

<!-- ASciiDoc in PRE element -->
<pre class="code asciidoc">
http://asciidoctor.org[*Asciidoctor*]
running on https://opalrb.com[_Opal_]
brings AsciiDoc to Node.js!
</pre>

<!-- include the `miceroux.min.js` -->
<script
    type="application/javascript"
    src="https://takamin.github.io/js/miceroux.min.js"></script>

<script type="application/javascript">

    // Preview the AsciiDoc in PRE.
    Miceroux.asciidoc("pre.code.asciidoc");

</script>
```

* [Sample page](./sample/index.html)

## LICENSE

このモジュールはMITライセンスで公開します。
