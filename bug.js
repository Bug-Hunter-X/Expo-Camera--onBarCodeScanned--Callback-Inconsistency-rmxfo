This bug occurs when using the Expo Camera API with a custom `onBarCodeScanned` callback. The callback function is not always triggered when a barcode is scanned, leading to unpredictable behavior. This is particularly noticeable when scanning multiple barcodes in quick succession or when the app is under heavy load.