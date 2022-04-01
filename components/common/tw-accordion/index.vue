
<template>
    <div class = 'accordion' :class = '{extended: isExtended}'>
        <div class = 'header' @click = 'toggle'>
            <div class = 'label'>{{label}}</div>
            <img alt = '' class = 'icon' src = '/icons/svg/delete.svg' alt = "Ouvrir ou fermer le menu accordéon">
        </div>
        <div class = "list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import smoothReflow from 'vue-smooth-reflow';

    export default
    {
        mixins: [smoothReflow],
        components: {

        },
        props: {
            label : String,
            isExtendedInit : Boolean
        },
        data: function()
        {
            return {
                isExtended: this.isExtendedInit
            }
        },
        methods:
        {
            toggle: function(){
                this.isExtended = !this.isExtended;
            }
        },
        mounted(){
            this.$smoothReflow({
                el: '.accordion .list',
                property: 'height',
                transition: 'height 100ms ease-in-out'
            })
        },
    }
</script>

<style lang = "stylus" scoped>
    @require '~assets/style/imports/index.import.styl';
</style>
