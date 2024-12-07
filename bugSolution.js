```javascript
import * as React from 'react';
import { Camera, useCameraDevices } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';

// ... (other imports and components)

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);
  const devices = useCameraDevices();
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    //Debouncing mechanism to avoid multiple calls in quick succession
    if(barcodeData !== data) {
        setBarcodeData(data);
        console.log('Barcode data:', data);
        setScanned(true);
    }
  };

  if (hasPermission === null) {
    return <View />; // Or some loading indicator
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
    <Camera
      style={{ flex: 1 }}
      type={Camera.Constants.Type.back}
      barcodeScannerSettings= {{
        barCodeTypes: [BarcodeScanner.Constants.BarCodeType.qr],
      }}
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      ref={cameraRef}
    >
      {/* Rest of your Camera component */}
    </Camera>
  );
}
```