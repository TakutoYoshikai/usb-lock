
const usbDetect = require("usb-detection");
const fs = require("fs");
const crypto = require("crypto");

function makeHash(id) {
  return crypto.createHash("sha256").update(id, "utf8").digest("hex");
}

function makeUniqueId(device) {
  return makeHash(device.deviceName + ":" + device.manufacturer + ":" + device.serialNumber);
}

function makeKey(device) {
  return makeHash("key: " + device.deviceName + ":" + device.manufacturer + ":" + device.serialNumber);
}

function register(pwPath) {
  usbDetect.on("add", (device) => {
      const pw = makeUniqueId(device);
      fs.writeFileSync(pwPath, pw, { flag: "w" });
      usbDetect.stopMonitoring();
      process.exit(0);
  });
  usbDetect.startMonitoring();
}
function observe(pwPath, events) {
  usbDetect.on("add", (device) => {
    const pw = fs.readFileSync(pwPath, "utf8").slice(0, 64);
    const id = makeUniqueId(device); 
    if (pw === id) {
      events.add(makeKey(device));
    }
  });

  usbDetect.on("remove", (device) => {
    let pw = fs.readFileSync(pwPath, "utf8").slice(0, 64);
    const id = makeUniqueId(device); 
    if (pw === id) {
      events.remove(makeKey(device));
    }
  });
  usbDetect.startMonitoring();
}

module.exports = {
  observe,
  register,
}
