(()=>{var a=window.Cookies.noConflict();function e(){var e=this.value,n=this.dataset.canonical,t="/";"en"!==e&&(t+=e+"/"),a.set("nf_lang",e,{expires:365}),location.href=t+n}document.getElementById("lang-select").addEventListener("change",e),document.getElementById("mobile-lang-select").addEventListener("change",e)})();