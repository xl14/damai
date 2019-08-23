
<template>
    <div class="xijv">
            <Header-top></Header-top>
            <Header-search></Header-search>
            <Tab-and-banner></Tab-and-banner>
    </div>
    
</template>


<script>
    import HeaderTop from "@/components/HeadTop";
    import HeaderSearch from "@/components/HeadSearch";
    import TabAndBanner from "@/components/TabAndBanner";

    export default {
    name: "xijv",
    data() {
        return {};
    },
    components: {
        HeaderTop,
        HeaderSearch,
        TabAndBanner
    }
    };
</script>

