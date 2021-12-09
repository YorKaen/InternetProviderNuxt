export const mixinNetwork = {
    data: () => ({
        connection: {
            isOnline: Boolean,
        },
    }),
    created(){
        window.addEventListener("online", this.handleNetwork);
        window.addEventListener("offline", this.handleNetwork);
        this.handleNetwork();
    },
    methods: {
        handleNetwork() {
            this.connection.isOnline = navigator.onLine;
            console.log("MIXIN NETWORK " + this.connection.isOnline)
        },
    },
    unmounted() {
        window.removeEventListener("online", this.handleNetwork);
        window.removeEventListener("offline", this.handleNetwork);
    },
}
