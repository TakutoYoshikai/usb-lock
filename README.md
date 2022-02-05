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
  remove: function(encryptionKey) {},
});
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
