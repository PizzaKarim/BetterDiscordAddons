/**
 * @name TimestampPicker
 * @version 0.0.1
 * @description Adds a timestamp picker button to the chat.
 * @author Karim
 * @website https://github.com/PizzaKarim/BetterDiscordAddons/tree/main/plugins/TimestampPicker
 * @source https://github.com/PizzaKarim/BetterDiscordAddons/blob/main/plugins/TimestampPicker/TimestampPicker.plugin.js
 * @updateUrl https://raw.githubusercontent.com/PizzaKarim/BetterDiscordAddons/main/plugins/TimestampPicker/TimestampPicker.plugin.js
 */

class Plugin {
    load() {
        console.log("TimestampPicker: Loaded");
    }

    start() {
        console.log("TimestampPicker: Enabled");
    }

    stop() {
        console.log("TimestampPicker: Disabled");
    }
}

module.exports = Plugin;
