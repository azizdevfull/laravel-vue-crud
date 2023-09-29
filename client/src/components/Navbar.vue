<template>
    <div
        class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
    >
        <RouterLink
            :to="{ name: 'home' }"
            class="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
            <VueIcon />
        </RouterLink>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink
                    :to="{ name: 'home' }"
                    class="me-3 py-2 link-body-emphasis text-decoration-none"
                    >Home</RouterLink
                >
                <RouterLink
                    :to="{ name: 'create-post' }"
                    class="me-3 py-2 link-body-emphasis text-decoration-none"
                    >Create</RouterLink
                >
        </nav>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
