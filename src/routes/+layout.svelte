<script>
  import "../app.pcss";
  import {AppBar, AppShell} from "@skeletonlabs/skeleton";
</script>

<AppShell >
    <svelte:fragment slot="sidebarLeft">
        <AppBar>
            <div class="center-div">
                <div class="grid grid-cols-1 font-serif extend">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <div>
                        <a href="/about">About</a>
                    </div>
                    <div>
                        <a href="/">Projects</a>
                    </div>
                </div>
            </div>
        </AppBar>
    </svelte:fragment>
    <slot />
</AppShell>

<style>
    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;
        font-size: 30px;
    }

    .extend {
        height: 50vh;
    }
</style>