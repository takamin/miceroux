# miceroux - ﾐｾﾙｰ

![](https://cdn-ak.f.st-hatena.com/images/fotolife/t/takamints/20190521/20190521164525.jpg)  
photo credit: InstructionalSolutions <a href="http://www.flickr.com/photos/154958442@N02/37344951101">Keyboard and Blank Paper</a> via <a href="http://photopin.com">photopin</a> <a href="https://creativecommons.org/licenses/by/2.0/">(license)</a>

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
    src="https://takamin.github.io/js/miceroux.min.js"></script>

<script type="application/javascript">

    // Preview the AsciiDoc in PRE.
    Miceroux.asciidoc("pre.code.asciidoc");

</script>
```

## LICENSE

このモジュールはMITライセンスで公開します。
