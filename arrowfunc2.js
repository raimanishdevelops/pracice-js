
// Key Rule

// Components, callbacks, handlers → arrow

// Utilities → either

// simple function to set state in handleClick
const handleClick = () => {
  setOpen(true);
};


const [open, setOpen] = useState(false);

<button onClick={handleClick}>Open</button>
// Clicking the button sets open = true → UI becomes visible


