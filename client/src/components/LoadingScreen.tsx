import { CSSProperties, useState, useEffect, useRef} from "react";
import BarLoader from "react-spinners/BarLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function LoadingScreen(){

  const [pixels, setPixels] = useState<{ x: number; y: number , w: number, h: number, c: string}[]>([]);

  // Predefined pattern of pixel positions
  const pattern: { x: number; y: number }[] = [
    { x: 13, y: 53 },
    { x: 6, y: 32 },
    { x: 19, y: 2 },
    { x: 56, y: 37 },
    { x: 34, y: 44 },
    { x: 49, y: 15 },
    { x: 27, y: 23 },
    { x: 10, y: 13 },
    { x: 50, y: 51 },
    { x: 33, y: 3 },
    { x: 18, y: 35 },
    { x: 41, y: 26 },
    { x: 8, y: 51 },
    { x: 59, y: 32 },
    { x: 50, y: 5 },
    { x: 24, y: 14 },
    { x: 33, y: 40 },
    { x: 33, y: 39 },
    { x: 1, y: 1 },
    { x: 23, y: 58 },
    { x: 51, y: 48 },
    { x: 13, y: 28 },
    { x: 41, y: 17 },
    { x: 0, y: 48 },
    { x: 19, y: 2 },
    { x: 63, y: 23 },
    { x: 19, y: 23 },
    { x: 30, y: 33 },
    { x: 19, y: 2 },
    { x: 17, y: 55 },
    { x: 4, y: 19 },
    { x: 54, y: 42 },
    { x: 41, y: 4 },
    { x: 54, y: 3 },
    { x: 4, y: 18 },
    { x: 54, y: 42 },
    { x: 27, y: 23 },
    { x: 8, y: 51 },
    { x: 59, y: 32 },
    { x: 19, y: 2 },
    { x: 19, y: 2 },
    { x: 26, y: 60 },

{ x: 61, y: 103 },
{ x: 48, y: 114 },
{ x: 24, y: 77 },
{ x: 62, y: 119 },
{ x: 51, y: 85 },
{ x: 37, y: 97 },
{ x: 48, y: 64 },
{ x: 7, y: 102 },
{ x: 29, y: 77 },
{ x: 34, y: 113 },
{ x: 33, y: 113 },
{ x: 46, y: 100 },
{ x: 45, y: 100 },
{ x: 9, y: 106 },
{ x: 37, y: 76 },
{ x: 20, y: 91 },
{ x: 61, y: 103 },
{ x: 21, y: 91 },
{ x: 44, y: 119 },
{ x: 13, y: 64 },
{ x: 61, y: 111 },
{ x: 44, y: 119 },
{ x: 13, y: 111 },
{ x: 63, y: 127 },
{ x: 49, y: 75 },
{ x: 12, y: 112 },
{ x: 26, y: 94 },
{ x: 48, y: 75 },
{ x: 26, y: 94 },
{ x: 19, y: 120 },
{ x: 19, y: 112 },
{ x: 18, y: 119 },
{ x: 37, y: 97 },
{ x: 0, y: 82 },
{ x: 61, y: 103 },
{ x: 61, y: 111 },
{ x: 61, y: 96 },
{ x: 61, y: 103 },
{ x: 0, y: 82 },
{ x: 0, y: 82 },
{ x: 24, y: 126 },
{ x: 17, y: 90 },
{ x: 10, y: 67 },
{ x: 61, y: 103 },

  ];

const currentPixelCount = useRef(0);
const [addNewPixel, setAddNewPixel] = useState<boolean>(true);

useEffect(() => {
    if (!addNewPixel) return; // Early return if no new pixel is being added

    const maxPixels = 400;

    setPixels((prev) => {
        if (prev.length >= maxPixels) return prev; // Stop adding if maxPixels reached

        const randomIndex = Math.floor(Math.random() * pattern.length);
        const newPos = { ...pattern[randomIndex] };
        const newPixel = {
          x: newPos.x,
          y: newPos.y,
          w: 3 + Math.random() * 5,
          h: 3 + Math.random() * 5,
          c: randomIndex < 41 ? "#96f97b" : "#75bbfd"
        }

        const randomPerturbationX =(Math.random()*.2 - .1);
        const randomPerturbationY = (Math.random()*.2 - .1);

        newPixel.x = Math.max(0, Math.min(100, newPixel.x + randomPerturbationX));
        newPixel.y = Math.max(0, Math.min(100, newPixel.y + randomPerturbationY));

        return [...prev, newPixel]; // Add the new pixel to the array
    });

    currentPixelCount.current += 1; // Update the pixel count

    // Schedule the next pixel addition after a random delay
    const scheduleNextPixel = () => {
        if (currentPixelCount.current >= maxPixels) return; // Stop if maxPixels reached

        const nextInterval = Math.random() * 500 + 100; // Randomize the next interval
        setTimeout(() => {
            setAddNewPixel(true); // Trigger adding a new pixel
        }, nextInterval);
    };

    scheduleNextPixel(); // Start scheduling the next pixel

    setAddNewPixel(false); // Immediately set addNewPixel to false after scheduling

    return () => {}; // Cleanup function (not needed here but can be useful)
}, [addNewPixel, pattern]); // Re-run the effect whenever addNewPixel or pattern changes



	return (
    <div
    >
    <img
      src="./src/assets/logo_large.png"
      style={{ 
        height: '30%', 
        width: '30%', 
        justifyItems:"center", 
        marginLeft: "auto", 
        marginRight: "auto" ,
        marginTop: "30vh",
        marginBottom: "auto"
      }}
      alt="DiffraView Logo"
    />
      <BarLoader
        color={"#ffffff"}
        loading={(true)}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
        width={400}
      />
      <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {pixels.map((pixel, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              width: `${pixel.w}px`,
              height: `${pixel.h}px`,
              backgroundColor: pixel.c,
              left: `${pixel.x}%`,
              top: `${pixel.y}%`,
            }}
          />
        ))}
      </div>
    </div>
	)
}