import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

const Form = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      <TextField
        fullWidth
        id="name"
        label="Name"
        variant="outlined"
        sx={{ m: 2 }}
      />
      <TextField
        fullWidth
        id="essay"
        label="Essay"
        variant="outlined"
        multiline
        sx={{ m: 2 }}
      />

      <FormControl fullWidth sx={{ m: 2 }}>
        <InputLabel id="demo-simple-select-label">Fruit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="coconut"
          label="Fruit"
        >
          <MenuItem value="grapefruit">Grapefruit</MenuItem>
          <MenuItem value="lime">Lime</MenuItem>
          <MenuItem value="coconut">Coconut</MenuItem>
          <MenuItem value="mango">Mango</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ m: 2 }}>
        <label>
          Select file:
          <input type="file" />
        </label>
      </FormControl>

      <Box sx={{ width: "100%", m: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Is going"
          />
        </FormGroup>
      </Box>

      <Box sx={{ width: "100%", m: 2 }}>
        <label>
          Start date:
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </label>
      </Box>

      <TextField
        fullWidth
        id="email"
        label="Enter your email"
        variant="outlined"
        sx={{ m: 2 }}
      />

      <TextField
        fullWidth
        label="Number of tentacles (10-100)"
        variant="outlined"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        sx={{ m: 2 }}
      />

      <FormControl fullWidth sx={{ m: 2 }}>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="huey" control={<Radio />} label="Huey" />
          <FormControlLabel value="dewey" control={<Radio />} label="Dewey" />
          <FormControlLabel value="louie" control={<Radio />} label="Louie" />
        </RadioGroup>
      </FormControl>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
