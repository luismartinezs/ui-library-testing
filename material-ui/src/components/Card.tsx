import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";

const BaseCard = () => {
  return (
    <Box mt={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random/400x200"
            alt="random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nisi ullamco laboris ullamco amet ex sit nulla nostrud occaecat in
              incididunt ut in. Et cupidatat occaecat sit ipsum ad duis ex dolor
              dolore. Ipsum nostrud nulla proident occaecat do eu excepteur
              minim magna veniam et voluptate dolor. Duis in nulla ex ad. Dolor
              ad aute pariatur laboris. Proident cillum ipsum anim sunt aliqua
              quis aute laborum est anim.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default BaseCard;
