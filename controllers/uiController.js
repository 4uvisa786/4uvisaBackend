export const getUIConfig = async (req, res) => {
    console.log('Fetching UI config');
  try {
    let scrollSpeed = Number(process.env.SERVICE_SCROLL_SPEED);

    // safety fallback
    if (!scrollSpeed || Number.isNaN(scrollSpeed) || scrollSpeed <= 0) {
      scrollSpeed = 30;
    }

    res.status(200).json({
      success: true,
    serviceScrollSpeed: scrollSpeed,
    });
    console.log(scrollSpeed);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'UI config fetch failed',
    });
  }
};


