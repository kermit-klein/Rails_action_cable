import consumer from "./consumer";

document.addEventListener("turbolinks:load", () => {
  consumer.subscriptions.create(
    { channel: "RoomChannel", room_id: 1 },
    {
      connected() {
        console.log("connected to room channel");
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        console.log(data);
      },
    }
  );
});
