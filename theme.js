/* =================================
   PLAYR THEME SYSTEM
   Dark + Light mode with localStorage
================================= */

(function(){
    /* Load theme IMMEDIATELY (before page renders) */
    var saved = localStorage.getItem("playr_theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);

    /* Expose global function */
    window.PLAYR_THEME = {
        get: function(){
            return localStorage.getItem("playr_theme") || "dark";
        },
        set: function(mode){
            if(mode !== "dark" && mode !== "light") return;
            localStorage.setItem("playr_theme", mode);
            document.documentElement.setAttribute("data-theme", mode);
            window.dispatchEvent(new CustomEvent("playr-theme-change", { detail: { theme: mode } }));
        },
        toggle: function(){
            var cur = this.get();
            this.set(cur === "dark" ? "light" : "dark");
            return this.get();
        }
    };
})();