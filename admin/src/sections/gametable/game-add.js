import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

const limits = [
  {
    value: 100,
    label: '100'
  },
  {
    value: 200,
    label: '200'
  },
  {
    value: 300,
    label: '300'
  },
  {
    value: 500,
    label: '500'
  },
  {
    value: 1000,
    label: '1K'
  },
  {
    value: 2000,
    label: '2K'
  },
  {
    value: 3000,
    label: '3K'
  },
  {
    value: 5000,
    label: '5K'
  },
  {
    value: 10000,
    label: '10K'
  },
  {
    value: 20000,
    label: '20K'
  },
  {
    value: 30000,
    label: '30K'
  },
  {
    value: 50000,
    label: '50K'
  },
  {
    value: 100000,
    label: '100K'
  },
];

const gametypes = [
  {
    value: 'holdem',
    label: "Texas Hold'em"
  },
];

export const AddNewTable = () => {
  const [values, setValues] = useState({
    name: '', // Provide an initial value for each field
    gametype: 'holdem',
    maxPlayers: 5,
    limit: 10000,
  });

  const handleChange = useCallback(
    (event) => {
      setValues(
        (prevState) => {
          console.log({
            ...prevState,
            [event.target.name]: event.target.value
          });
          return ({
            ...prevState,
            [event.target.name]: event.target.value
          });
        }
      );
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
  
      // Validation checks
      const { name, maxPlayers, limit } = values;
      if (!name || name.trim() === '') {
        // Name is required
        alert('Table name is required.');
        return;
      }
      if (name.length < 5 || name.length > 30) {
        // Name should be between 5 and 30 characters
        alert('Table name should be between 5 and 30 characters.');
        return;
      }
      if (!maxPlayers || isNaN(maxPlayers) || maxPlayers < 2 || maxPlayers > 5) {
        // Max Players should be a number between 2 and 5
        alert('Max Players should be a number between 2 and 5.');
        return;
      }
      if (!limit || isNaN(limit) || limit < 100 || limit > 100000) {
        // Limit should be a number between 100 and 100000
        alert('Limit should be a number between 100 and 100000.');
        return;
      }

      try {
        // Define the API URL
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/tables/create`;
  
        // Make the API request
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Send the form values as JSON
        });
  
        // Check if the response is OK
        if (!response.ok) {
          alert(response);
          return;
        }
  
        // Assuming the API returns the newly created table as JSON
        const data = await response.json();
  
        // Handle the response data as needed
        alert('Table created!');
        location.href = '/gametables';
  
        // You can also perform any other actions here, such as redirecting the user or updating the UI.
  
      } catch (error) {
        console.error('Error:', error);
        alert(error);
      }
    },
    [values]
  );  

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Table Info"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the table name"
                  label="Table Name"
                  name="name"
                  required
                  onChange={handleChange}
                  value={values.name}
                />
              </Grid>

              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select Game Type"
                  name="gametype"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.gametype}
                >
                  {gametypes.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Max Players"
                  name="maxPlayers"
                  onChange={handleChange}
                  required
                  type="number"
                  value={values.maxPlayers}
                  inputProps={{
                    min: 2,   // Minimum allowed value
                    max: 5,  // Maximum allowed value
                  }}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select Limit"
                  name="limit"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.limit}
                >
                  {limits.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};