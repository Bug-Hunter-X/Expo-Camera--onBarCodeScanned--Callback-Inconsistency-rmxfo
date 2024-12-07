# Expo Camera `onBarCodeScanned` Callback Inconsistency

This repository demonstrates a bug in the Expo Camera API where the `onBarCodeScanned` callback is not always triggered reliably when scanning barcodes. The issue is more pronounced when scanning multiple barcodes rapidly or when the application is experiencing high resource utilization. 

The `bug.js` file showcases the inconsistent behavior.  The `bugSolution.js` file provides a potential workaround (though not a perfect fix).  This is a complex issue, and further investigation might be necessary for a complete resolution.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or a similar tool.
4. Point the camera at several barcodes in quick succession. Observe that not all barcodes are consistently detected and logged.

## Potential Solution (Workaround)

The `bugSolution.js` file attempts to mitigate the issue by introducing debouncing or throttling to the barcode scanning logic.  This isn't a guaranteed fix, and further refinement might be needed. 