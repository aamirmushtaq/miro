miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        // Title that appears when a user puts the mouse pointer over the icon
        title: "Insert Sticker With Today's Date",
        // Button that you want to add in the bottom bar with its propoerties such as the position, shape, size, and color 
        svgIcon: '<rect x="0" y="0" width="24" height="24" fill="currentColor" />',
        // Define the action to create a sticky note with the current date as the default text when a user clicks the button
        onClick: async () => {
          // Store the current viewport position 
          const viewport = await miro.board.viewport.get();
          // Calculate and store the X coordinate for the center of the viewport  
          const centeredX = viewport.x + viewport.width / 2;
          // Calculate and store the Y coordinate for the center of the viewport  
          const centeredY = viewport.y + viewport.height / 2;
          // Store the current date
          const currentdate = new Date();
          // Create a widget on the board with its properties such as the type of the widget, default text, and position on the current view of the board 
          miro.board.widgets.create({
            // Create a sticky note widget 
            type: "sticker",
            // Display today's date in the default locale as the default text on the sticky note
            text: currentdate.toLocaleDateString(),
            // X coordinate value for the placement of the sticky note on the current view of the board
            x: centeredX,
            // Y coordinate value for the placement of the sticky note on the current view of the board
            y: centeredY,
          });
        },
      },
    },
  });
});
