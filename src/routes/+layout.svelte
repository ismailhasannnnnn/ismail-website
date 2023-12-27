<script lang="ts">
    import "../app.pcss";
    import me from '/images/me.jpeg';
    import github from '/images/github.png';
    import linkedin from '/images/linkedin.png';
    import {
        AppBar,
        AppShell,
        getModalStore,
        initializeStores,
        LightSwitch,
        Modal,
        type ModalSettings
    } from "@skeletonlabs/skeleton";

    initializeStores();

    const modalStore = getModalStore();

    const modal: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Please Confirm',
        body: 'Are you sure you wish to proceed?',
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => console.log('response:', r),
    };

    function trigger() {
        modalStore.trigger(modal);
    }

</script>

<Modal class="bg-white"/>

<AppShell slotSidebarLeft="bg-tertiary-500/5">
    <svelte:fragment slot="sidebarLeft">
        <AppBar>
            <div class="center-div">
                <div class="grid grid-cols-1 flex-direction-column align-items-center extend">
                    <div>
                        <LightSwitch/>
                    </div>
                    <div class="row-span-2">
                        <!--Spacer-->
                    </div>
                    <div>
                        <p class="font-sans">Ismail Hasan</p>
                    </div>
                    <div>
                        <img src={me} alt="me" id="my-image" class="rounded-full h-40 w-40"/>
                    </div>
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <div>
                        <a href="/about">About</a>
                    </div>
                    <div>
                        <a href="/projects">Projects</a>
                    </div>
                    <div>
                        <a href="/contact">Contact me</a>
                    </div>
                    <div>
                        <div class="grid grid-cols-2 center-images">
                            <div>
                                <a href="https://github.com/ismailhasannnnnn"><img src={github} alt="github"
                                                                                   class="rounded-full h-14 w-14"/></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/ismail-hasan-674180161/"><img src={linkedin}
                                                                                                   alt="linkedin"
                                                                                                   class="rounded-full h-14 w-14"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-2">
                        <!--Spacer-->
                    </div>
                </div>
            </div>
        </AppBar>
    </svelte:fragment>
    <slot/>
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
        text-align: center;
        height: 100vh;
        margin-right: -20px;
    }

    .flex-direction-column {
        flex-direction: column;
    }

    .align-items-center {
        align-items: center;
    }

    .center-images {
        padding-left: 20px;
    }

    p {
        padding-top: 10px;
    }

</style>