(function (window) {

    var head, lastTag,
        document = window.document,
        bind = document.addEventListener || function (name, fn) {
            return this.attachEvent("on" + name, fn);
        };

    function bootstrap(src, fn) {
        if (!head) {
            head = ("head" in document
                    ? document.head
                    : document.getElementsByTagName("head")[0]);
        }

        if (!head) {
            var args = arguments;
            setTimeout(function () { boostrap.apply(this, args) }, 10);
        } else {
            var c = 0, i = 0, l = src.length,
                onload = function () {
                    if (++c == l) fn();
                };

            for (; l > i; ++i) {
                var tag = document.createElement("script");
                tag.setAttribute("src", src[i]);
                bind.call(tag, "load", onload);
                head.insertBefore(tag, lastTag ? lastTag.nextSibling : head.firstChild);
            }
        }
    };

    window.bootstrap = window.$b = bootstrap;

}(window));
