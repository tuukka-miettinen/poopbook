import { useContext } from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import PoopForm from "./PoopForm"
import PoopList from "./PoopList"
import Navbar from "./Navbar"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <Container maxWidth="xl" className="">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: 'calc(100vh - 69px)' }}
                >
                    <h1>Dashboard</h1>
                    <PoopForm />
                    <PoopList />
                </Grid>
            </Container>
        </Box>
    )
}

export default Dashboard;