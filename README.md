# miceroux - 見せる

HTML要素内のAsciiDoc文書をHTMLに変換して「見せる」JavaScriptです。

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
    src="foo/miceroux.min.js"></script>

<script type="application/javascript">

    // Preview the AsciiDoc in PRE.
    Miceroux.asciidoc("pre.code.asciidoc");

</script>
```

## LICENSE

このモジュールはMITライセンスで公開します。
