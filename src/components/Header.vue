<template>
<nav class="header navbar navbar-light fixed-top">
        <span class="navbar-brand mb-0 h1 brand">{{ logo }}</span>
        <a id="github-link" href="https://github.com/vzalberto/melp" target="_blank">
                <i class="fa fa-github fa-3x" aria-hidden="true"></i>
        </a>
</nav>
</template>
<script>
        export default{
                data: function(){
                        return{
                                logo: 'Melp!'
                        }
                }
        }
</script>