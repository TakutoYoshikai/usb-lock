# usb-lock
usb-lock is an event runner for encryption by specific USB device.

### Usage
**install**
```bash
npm install --save TakutoYoshikai/usb-lock
```

**example**
```javascript
const usbLock = require("usb-lock");
usbLock.register("/path/to/password-file"); //register key

//observe usb device
usbLock.observe("/path/to/password-file", {
  add: function(encryptionKey) {},
  remove: function() {},
});
```

### License
MIT License
