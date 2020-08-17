import consumer from "./consumer";

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("connected to room channel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data);
  },
});
