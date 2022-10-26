const animationFrames = ['\r|  ', '\r/  ', '\r-  ', '\r\\   ', '\r|  ', '\r/  ', '\r-  ', '\r\\   ',];

for (let i = 0; i < animationFrames.length; i++) {
  setTimeout(() => {
    if (i === animationFrames.length - 1) {
      process.stdout.write(animationFrames[i]  + '\n');
    } else {
      process.stdout.write(animationFrames[i]);
    }
  }, i * 200);
               
};

