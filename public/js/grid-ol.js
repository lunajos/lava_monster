new GridOverlay({
overlayVisible: false,
maxWidth: 1440,
controlPosition: "fixed",
controlBottom: "10px",
controlRight: "10px",
columns: 12,
extraLeftRightGutter: 8,
gridGutter: 8,
adaptive: [
{
mediaQuery: "(max-width: 700px)",
cols: 2,
gridGutter: 8,
extraLeftRightGutter: 8
},
{
mediaQuery: "(min-width: 1025px)",
cols: 12,
gridGutter: 8,
extraLeftRightGutter: 48
}
]
});

